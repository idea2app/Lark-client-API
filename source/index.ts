import { H5Option, TTOption } from './global';

const H5SDK = globalThis.h5sdk;

const { ready, error, ...H5_rest } = H5SDK;

type PromisifyH5<T> = {
    [K in keyof T]: T[K] extends (data: H5Option<infer O>) => any
        ? (data: H5Option<O>) => Promise<any>
        : T[K];
};

export const h5sdk = {
    ...(Object.fromEntries(
        Object.entries(H5_rest).map(([key, value]) =>
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
    ) as PromisifyH5<typeof H5SDK>),

    ready: () => new Promise(H5SDK.ready.bind(H5SDK)),

    error: H5SDK.error.bind(H5SDK) as typeof error
};

const TT = globalThis.tt;

const { onChatBadgeChange, offChatBadgeChange, ...TT_rest } = TT;

type PromisifyTT<T> = {
    [K in keyof T]: T[K] extends (
        data: TTOption<infer O, infer R, infer E>
    ) => any
        ? (data: TTOption<O, R, E>) => Promise<R>
        : T[K];
};

export const tt = {
    ...(Object.fromEntries(
        Object.entries(TT_rest).map(([key, value]) =>
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
    ) as PromisifyTT<typeof TT>),

    onChatBadgeChange: onChatBadgeChange.bind(TT) as typeof onChatBadgeChange,

    offChatBadgeChange: offChatBadgeChange.bind(TT) as typeof offChatBadgeChange
};
