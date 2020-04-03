// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// http.createServer((request, response) => {
//   // 解析请求 包括文件名
//   var pathname = url.parse(request.url).pathname;
  
//   console.log('request for ' + pathname + ' received');

//   // 从文件系统中读取请求文件
//   fs.readFile(pathname.substr(1), (err, data) => {
//       if (err) {
//           console.log('err', err);

//           response.writeHead(404, {'Content-Type': 'text/html'});
//       } else {
//           response.writeHead(200, {'Content-Type': 'text/html'});
//           response.write(data.toString());
//           console.log('request success');
//       }
//       response.end();
//   });
// }).listen(9527);

// console.log('server is running at port 9527')

// import fileApi from './fileAPI.js';
var fileAPI = require('./fileAPI.js')

var express = require('express');
var fs = require('fs');
var url = require('url');

var app = express();
app.use('/files', express.static('files'));

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('hello express');
    }, 3000)
})


let pathArr = {
    'index.html': 'index.html'
}
app.get('/index.html', (req, res) => {
    // console.log(url.parse(req.url).pathname)
    let path = url.parse(req.url).pathname;

    let data = fileApi(path.substr(1));
    if (data) {
        res.write(200, {'Content-Type': 'text/html'});
        res.write(data);

        console.log('res success');
    } else {
        res.write(404, {'Content-Type': 'text/html'});

        console.log('res fail');
    }
    res.end();
})

var server = app.listen(9529, 'localhost', () => {

    let address = server.address();
    var host = server.address().address;
    var port = address.port;

    console.log('访问地址 http://%s:%s',host, port)
})