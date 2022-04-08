import { InteractiveMessage } from 'lark-ts-sdk';

import { TTOption, I18nKey } from './index';

declare global {
    namespace tt {
        /**
         * only for **Mini App**
         *
         * @see https://open.feishu.cn/document/uYjL24iN/ukDM04SOwQjL5ADN
         */
        function enterChat(
            option: TTOption<{
                openid?: string;
                openChatId?: string;
                needBadge?: boolean;
            }>
        ): any;

        /**
         * only for **Desktop**
         *
         * @since 4.1.0
         * @see https://open.feishu.cn/document/uYjL24iN/ugDM04COwQjL4ADN/toggleChat
         */
        function toggleChat(
            option: TTOption<{
                openChatId: string;
                width?: number;
                needSidebar?: boolean;
                isKeep?: boolean;
            }>
        ): any;

        interface ChatMeta {
            name: string;
            i18nNames: Record<I18nKey, string>;
            avatarUrls: string[];
        }
        interface ChatChoose {
            allowCreateGroup?: boolean;
            multiSelect?: boolean;
            ignoreSelf?: boolean;
            ignoreBot?: boolean;
            selectType?: 0 | 1 | 2;
            confirmTitle?: string;
            confirmDesc?: string;
            externalChat?: boolean;
            showMessageInput?: boolean;
        }
        /**
         * @since 3.1.0
         * @see https://open.feishu.cn/document/uYjL24iN/uMTN3QjLzUzN04yM1cDN
         */
        function chooseChat(
            option: TTOption<
                ChatChoose,
                {
                    message: string;
                    data: (ChatMeta & {
                        id: string;
                        chatType: 0 | 1;
                        userType: 0 | 1;
                    })[];
                }
            >
        ): any;

        /**
         * @since 3.10.0
         * @see https://open.feishu.cn/document/uYjL24iN/uEDN2UjLxQjN14SM0YTN
         */
        function getChatInfo(
            option: TTOption<
                {
                    openChatId: string;
                    chatType: 0 | 1;
                    userType?: 0 | 1;
                },
                ChatMeta & {
                    atCount: number;
                    badge: number;
                }
            >
        ): any;

        /**
         * only for **Mini App**
         *
         * @see https://open.feishu.cn/document/getBlockActionSourceDetail
         */
        function getBlockActionSourceDetail(
            option: TTOption<
                { triggerCode: string },
                {
                    bizType: 'message';
                    content: {
                        actionTime: number;
                        messages: {
                            messageType:
                                | 'text'
                                | 'image'
                                | 'post'
                                | 'media'
                                | 'file'
                                | 'interactive'
                                | 'unsupport';
                            sender: { name: string; open_id: string };
                            createTime: number;
                            support: boolean;
                            content: string;
                            status: boolean;
                            openChatId: string;
                            openMessageId: string;
                        }[];
                    };
                }
            >
        ): any;

        /**
         * @since 2.7.0
         * @see https://open.feishu.cn/document/uYjL24iN/uAjM1EjLwITNx4CMyUTM
         */
        function enterBot(option: TTOption): any;

        interface SentCard {
            status: number;
            openChatId: number;
            openMessageId: string;
        }
        /**
         * @since 3.19.0
         * @see https://open.feishu.cn/document/uYjL24iN/uUjN5UjL1YTO14SN2kTN
         */
        function sendMessageCard(
            option: TTOption<
                {
                    shouldChooseChat?: boolean;
                    chooseChatParams?: ChatChoose;
                    openChatIDs?: string[];
                    cardContent?: InteractiveMessage;
                    withAdditionalMessage?: boolean;
                },
                {
                    sendCardInfo: SentCard[];
                },
                {
                    sendCardInfo: SentCard[];
                    failedOpenChatIDs: string[];
                    additionalMessageInfo: (Omit<SentCard, 'openMessageId'> & {
                        message: string;
                    })[];
                }
            >
        ): any;

        interface ChatBadgeChange<T = void> {
            openChatId: string;
            onChange?: (data: T) => any;
        }
        /**
         * only for **Mini App**
         *
         * @since 3.10.0
         * @see https://open.feishu.cn/document/uYjL24iN/uQDN2UjL0QjN14CN0YTN
         */
        function onChatBadgeChange(
            option: Required<ChatBadgeChange<{ badge: number }>>
        ): any;

        /**
         * only for **Mini App**
         *
         * @since 3.10.0
         * @see https://open.feishu.cn/document/uYjL24iN/ugDM04COwQjL4ADN/offchatbadgechange
         */
        function offChatBadgeChange(option: ChatBadgeChange): any;
    }
}
