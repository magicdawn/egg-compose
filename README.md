# egg-compose
> compose koa middleware to an egg.js action

[![Build Status](https://img.shields.io/travis/magicdawn/egg-compose.svg?style=flat-square)](https://travis-ci.org/magicdawn/egg-compose)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/egg-compose.svg?style=flat-square)](https://codecov.io/gh/magicdawn/egg-compose)
[![npm version](https://img.shields.io/npm/v/egg-compose.svg?style=flat-square)](https://www.npmjs.com/package/egg-compose)
[![npm downloads](https://img.shields.io/npm/dm/egg-compose.svg?style=flat-square)](https://www.npmjs.com/package/egg-compose)
[![npm license](https://img.shields.io/npm/l/egg-compose.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```sh
$ npm i egg-compose --save
```

## API
```js
const compose = require('egg-compose');
```

### action example
```js
const compose = require('egg-compose')

module.exports = app => {
  class HomeController extends app.Controller {}

  Object.assign(HomeController.prototype, {
    hello: compose([
      async(ctx, next) => {
        ctx.body = 'hello'
        return next()
      },
      async(ctx, next) => {
        ctx.body += ' world'
      },
    ])
  })

  return HomeController
}
```

the `home.hello` will results `hello world` text

### co-wechat example
https://github.com/node-webot/co-wechat#middleware-方法变更

使用 compose 包装一层即可使用

```js
const compose = require('egg-compose')
const wechat = require('co-wechat')

module.exports = app => {
  class HomeController extends app.Controller {}

  Object.assign(HomeController.prototype, {
    wechat: compose([
      wechat(config).middleware(async message => {
        // blabla
      })
    ])
  })

  return HomeController
}
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org