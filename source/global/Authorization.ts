import { H5Option, TTOption } from './index';

declare global {
    namespace h5sdk {
        /**
         * @see https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN#581971c6
         */
        function config(
            data: H5Option<{
                appId: string;
                timestamp: number;
                nonceStr: string;
                signature: string;
                jsApiList?: string[];
            }>
        ): any;
    }

    namespace tt {
        /**
         * only for **Web**
         *
         * @since 5.1.0
         * @see https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/20220308
         */
        function requestAuthCode(
            option: TTOption<{ appId: string }, { code: string }>
        ): any;

        /**
         * only for **Mini App**
         *
         * @see https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM
         */
        function login(option: TTOption<{}, { code: string }>): any;

        /**
         * only for **Mini App**
         *
         * @see https://open.feishu.cn/document/uYjL24iN/ukTMx4SOxEjL5ETM
         */
        function checkSession(option: TTOption): any;

        /**
         * @see https://open.feishu.cn/document/uYjL24iN/ugzMx4COzEjL4MTM
         */
        function authorize(option: TTOption<{ scope: string }>): any;
    }
}
