var express = require("express");
var request = require("request");
var app = express();

//引入module文件
const Server = require("./db.js");
let server = new Server();

app.get("/getImg", function (req, res) {
  function getBanner() {
    return new Promise(function (reslove, reject) {
      res.append("Access-Control-Allow-Origin", "*")
      request('https://www.duitang.com/napi/mbanner/?app_code=mdt',
      function (err, response, body) {
        if (err) {throw err}
        
        // console.log(body)
        res.send(body)
        reslove(body)
      })
    })
  }

  function sendMongodb(obj) {
    return new Promise(reslove => {
      var res = JSON.parse(obj)
      //server.insert(数据表名,需要插入的数据（键值对的对象）,回调函数);
      res.data.object_list.forEach((item, idx) => {
        server.insert('jucoo',
          [{
            album_id: item.album_id,
            image: item.image
          }],
          function (result) {
            console.log(result)
          }
        )
      })
    })
  }

  getBanner().then(sendMongodb)
})

module.exports = app
