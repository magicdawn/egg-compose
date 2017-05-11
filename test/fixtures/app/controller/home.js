'use strict'

const compose = require('../../../../')

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