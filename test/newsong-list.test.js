const assert = require('assert')
const crypto = require('crypto')
const { createWebAPIRequest } = require('../util/util')

describe('测试获取新歌榜', () => {
  it('retcode should be 1', done => {
    const data = {}
    const cookie = ''

    createWebAPIRequest(
      'music.qq.com',
      '/musicbox/shop/v3/data/hit/hit_newsong.js',
      'GET',
      data,
      cookie,
      music_req => {
        assert(music_req.includes('retcode:"1"'))
        done()
      },
      err => {
        done(err)
      }
    )
  })
})
