# Lark client API

[Lark client JS API][1] unofficial wrapper based on [ECMAScript 6 Promise][2] & [TypeScript 4][3]

[![CI & CD](https://github.com/idea2app/Lark-client-API/actions/workflows/main.yml/badge.svg)][4]

[![NPM](https://nodei.co/npm/lark-client-api.png?downloads=true&downloadRank=true&stars=true)][5]

## Document

https://ideapp.dev/Lark-client-API/

## Modules

1. [Utility](source/global/Utility.ts)
2. [Authorization](source/global/Authorization.ts)
3. [Chat](source/global/Chat.ts)

## Usage

`app.js` as your entry for example:

```javascript
import { h5sdk, tt } from 'lark-client-api';

// in WebView
window.h5sdk.error(console.error);

h5sdk
    .config({
        // your configuration
    })
    .then(() => h5sdk.ready())
    .then(() => {
        // your logic
    });

// in Mini App
tt.login({
    // your configuration
}).then(() => {
    // your logic
});
```

## Inspired by

1. [WeChat JS-SDK Promise](https://github.com/xialeistudio/wechat-jssdk-promise)
2. [WeChat Mini-Program API Typings](https://github.com/wechat-miniprogram/api-typings)

## Related with

-   Lark Node.js SDK: https://github.com/idea2app/Lark-TS-SDK

[1]: https://open.feishu.cn/document/uYjL24iN/uADOy4CM4IjLwgjM
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[3]: https://www.typescriptlang.org/
[4]: https://github.com/idea2app/Lark-client-API/actions/workflows/main.yml
[5]: https://nodei.co/npm/lark-client-api/
