'use strict'


const mm = require('egg-mock')
const assert = require('assert')

describe('Simple', () => {
  let app

  before(() => {
    app = mm.app({
      baseDir: __dirname + '/fixtures'
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mm.restore)

  it('compose works', async() => {
    const res = await app
      .httpRequest()
      .get('/hello')
    res.text.should.match(/hello world/)
  })
})