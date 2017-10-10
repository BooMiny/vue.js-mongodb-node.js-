var http = require('http');
var util = require('util');

http.get('http://www.imooc.com/index/getstarlist',function (res) {
  let data = '';
  res.on("data",function (chunk) {
    data += chunk;
  });

  res.on("end", function () {
    let result = JSON.parse(data);
    console.log("result:"+result.msg);
    console.log("result:"+util.inspect(result));
  })
});
