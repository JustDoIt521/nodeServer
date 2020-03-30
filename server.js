var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((request, response) => {
  // 解析请求 包括文件名
  var pathname = url.parse(request.url).pathname;
  
  console.log('request for ' + pathname + ' received');

  // 从文件系统中读取请求文件
  fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
          console.log('err', err);

          response.writeHead(404, {'Content-Type': 'text/html'});
      } else {
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(data.toString());
          console.log('request success');
      }
      response.end();
  });
}).listen(9527);

console.log('server is running at port 9527')