const assert = require('assert')
const crypto = require('crypto')
const { createRequest } = require('../util/util')

describe('测试歌曲搜索是否正常', () => {
  it('数据的 code 应该为0', done => {
    createRequest('/fcgi-bin/music_search_new_platform?t=0&n=10&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=aaa', 'GET', null)
      .then(result => {
        const code = JSON.parse(result).code
        console.log('code:' + code)
        assert(code === 0)
        done()
      })
      .catch(err => done(err))
  })
})
