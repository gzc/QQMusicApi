const assert = require('assert')
const crypto = require('crypto')
const { createWebAPIRequest } = require('../util/util')

describe('测试获取歌词', () => {
  it('retcode should be 1', done => {
    const data = {}
    const cookie = ''
    const id = 101369814

    createWebAPIRequest(
      'music.qq.com',
      `http://music.qq.com/miniportal/static/lyric/${id%100}/${id}.xml`,
      'GET',
      data,
      cookie,
      music_req => {
        assert(music_req.includes('CDATA'))
        done()
      },
      err => {
        done(err)
      }
    )
  })
})
