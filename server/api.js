var express = require("express");
var request = require("request");
var app = express();

//引入module文件
const Server = require("./db.js");
let server = new Server();

app.get("/getImg", function (req, res) {
  function getBanner() {
    return new Promise(function (resolve, reject) {
      // res.append("Access-Control-Allow-Origin", "*")
      request('https://www.duitang.com/napi/mbanner/?app_code=mdt',
      function (err, response, body) {
        if (err) {throw err}
        
        // console.log(body)
        res.send(body)
        resolve(body)
      })
    })
  }
  function checkData(data) {
    return new Promise(function (resolve,reject){
      let datas = JSON.parse(data)
      let arr = datas.data.object_list

      server.find('jucoo',
        {//查询语句的时候不能用数组的形式,插入多个时倒是必须用数组的形式
        },
        function(res,docs) {
          if(docs.length == 0){
            resolve(JSON.stringify(arr))
          }else{
            // console.log(docs)//不存在的,返回空数组
            for(var i = 0; i<docs.length; i++){
              arr.map( (item,idx) => {
                if(item.album_id == docs[i].album_id){
                  arr.splice(idx,1)
                  console.log(arr.length)
                }
              })
            }
            resolve(JSON.stringify(arr))
          }
        }
      )
      
    })
  }


  function sendMongodb(obj) {
    // console.log(obj)
    return new Promise(resolve => {
      // console.log(obj)
      let res = JSON.parse(obj)
      // console.log(res)
      //server.insert(数据表名,需要插入的数据（键值对的对象）,回调函数);
      res.forEach((item, idx) => {
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

  getBanner().then(checkData).then(sendMongodb)
})

module.exports = app
