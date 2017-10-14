import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>QQ Music Node API</h1>
        <h2>example:</h2>
        <ul>
          <li>
            1.{" "}
            <a href="http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=Taylor">
              Search keywords Taylor
            </a>
          </li>
          <li>
            2.{" "}
            <a href="http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js">
              Get most popular songs
            </a>
          </li>
          <li>
            <audio
              src="http://ws.stream.qqmusic.qq.com/1597410.m4a?fromtag=46"
              controls
            />
          </li>
          <img
            src="http://imgcache.qq.com/music/photo/album_300/91/300_albumpic_128191_0.jpg"
            alt=""
          />
        </ul>
      </div>
    );
  }
}

export default App;
