var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//   res.send('<audio src="http://ws.stream.qqmusic.qq.com/101369814.m4a?fromtag=46" controls></audio>');
// });

app.use(express.static('public'))

// 按关键字搜索歌曲
app.use('/song/search', require('./router/song_search'))

// 新歌榜
app.use('/newsong/list', require('./router/newsong_list'))

// 总榜
app.use('/all/best', require('./router/all_best'))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server running @${port}`)
})
