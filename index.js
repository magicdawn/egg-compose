'use strict'

const compose = require('koa-compose')

module.exports = function eggCompose(middlewares) {
  const fn = compose(middlewares)
  return function() {
    const ctx = this.ctx
    return fn(ctx)
  }
}