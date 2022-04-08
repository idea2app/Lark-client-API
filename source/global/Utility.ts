declare global {
    namespace h5sdk {
        /**
         * @see https://open.feishu.cn/document/uYjL24iN/uITO4IjLykDOy4iM5gjM#ed5c6220
         */
        function ready(handler: (...data: any[]) => any): any;

        /**
         * @see https://open.feishu.cn/document/uYjL24iN/uITO4IjLykDOy4iM5gjM#ab246c8d
         */
        function error(handler: (error: any) => any): any;
    }
}
export {};
