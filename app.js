var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello, express');
});

app.use(express.static('public'))

// 按关键字搜索歌曲
app.use('/song/search', require('./router/song_search'))

app.listen(3000);
