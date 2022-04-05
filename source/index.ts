import { H5Option, TTOption } from './global';

const H5SDK = globalThis.h5sdk;

const { ready, error, ...fields } = H5SDK;

type PromisifyH5<T> = {
    [K in keyof T]: T[K] extends (data: H5Option<infer O>) => any
        ? (data: H5Option<O>) => Promise<any>
        : T[K];
};

export const h5sdk = {
    ready: () => new Promise(H5SDK.ready.bind(H5SDK)),

    error: H5SDK.error.bind(H5SDK) as typeof error,

    ...Object.fromEntries(
        Object.entries(fields).map(([key, value]) =>
            typeof value !== 'function' || key.endsWith('Sync')
                ? [key, value]
                : [
                      key,
                      (option: H5Option) =>
                          new Promise((onSuccess, onFail) =>
                              (value as (option: H5Option) => any).call(h5sdk, {
                                  ...option,
                                  onSuccess,
                                  onFail
                              })
                          )
                  ]
        )
    )
} as unknown as PromisifyH5<typeof H5SDK>;

const TT = globalThis.tt;

type PromisifyTT<T> = {
    [K in keyof T]: T[K] extends (
        data: TTOption<infer O, infer R, infer E>
    ) => any
        ? (data: TTOption<O, R, E>) => Promise<R>
        : T[K];
};

export const tt = Object.fromEntries(
    Object.entries(TT).map(([key, value]) =>
        typeof value !== 'function' || key.endsWith('Sync')
            ? [key, value]
            : [
                  key,
                  (option: TTOption) =>
                      new Promise((success, fail) =>
                          value.call(TT, { ...option, success, fail })
                      )
              ]
    )
) as PromisifyTT<typeof TT>;
