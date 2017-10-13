const express = require('express')
var iconv = require('iconv-lite');
const router = express()
const { createWebAPIRequest } = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  createWebAPIRequest(
    'music.qq.com',
    '/musicbox/shop/v3/data/hit/hit_all.js',
    'GET',
    null,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
