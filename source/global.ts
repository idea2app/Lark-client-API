export type H5Option<T extends Record<string, any> = any> = T & {
    onSuccess?: (result) => any;
    onFail?: () => any;
};
export type Result<T extends Record<string, any>> = T & { errMsg: string };

export type TTOption<
    O extends Record<string, any> = any,
    R extends Record<string, any> = any,
    E extends Record<string, any> = any
> = O & {
    success?: (result: Result<R>) => any;
    fail?: (error: Result<E & { errCode: number }>) => any;
    complete?: (result: Result<R> | Result<E & { errCode: number }>) => any;
};

declare global {
    namespace h5sdk {
        function config(
            data: H5Option<{
                appId: string;
                timestamp: number;
                nonceStr: string;
                signature: string;
                jsApiList?: string[];
            }>
        ): any;

        function ready(handler: (...data: any[]) => any): any;
        function error(handler: (error: any) => any): any;
    }

    namespace tt {
        function requestAuthCode(
            option: TTOption<{ appId: string }, { code: string }>
        ): any;
    }
}
