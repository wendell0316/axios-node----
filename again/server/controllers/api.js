const express = require('express')


const router = module.exports = express.Router()

router.prefix = '/api'

/**
 * GET /api/music
 */
router.get('/b', (req, res) => {
  // JSONP在当下的WEB开发过程中经常用到，express就是将经常用到的东西进行封装
  // res.send(`${req.query.cb} && ${req.query.cb}(${JSON.stringify(Music.getList())})`)
  // res.send(`foo(${Music.getList()})`)
  // 如果是自己写 必须设置响应的响应类型
  // jsonp方法中会自动接收客户端传来的回调函数名称
  const data = {time: '9/7'}
  res.jsonp(data)
})

