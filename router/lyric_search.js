const express = require('express')
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const id = req.get('id')
  const data = {
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.qq.com',
    `http://music.qq.com/miniportal/static/lyric/${id%100}/${id}.xml`,
    'GET',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
