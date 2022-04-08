/**
 * @see https://open.feishu.cn/document/uYjL24iN/uITO4IjLykDOy4iM5gjM#ec932f50
 */
export type H5Option<T extends Record<string, any> = any> = T & {
    onSuccess?: (result) => any;
    onFail?: () => any;
};
export type Result<T extends Record<string, any>> = T & { errMsg: string };

/**
 * @see https://open.feishu.cn/document/uYjL24iN/uITO4IjLykDOy4iM5gjM#580d57c6
 */
export type TTOption<
    O extends Record<string, any> = any,
    R extends Record<string, any> = any,
    E extends Record<string, any> = any
> = O & {
    success?: (result: Result<R>) => any;
    fail?: (error: Result<E & { errCode: number }>) => any;
    complete?: (result: Result<R> | Result<E & { errCode: number }>) => any;
};

export type I18nKey = `${string}_${string}`;

export * from './Utility';
export * from './Authorization';
export * from './Chat';
