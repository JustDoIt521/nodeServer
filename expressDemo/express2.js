var express = require('express');
var app = express();

// 主页面输出
app.get('/', (req, res) => {
    console.log('主页面 get请求');
    res.send('接收get请求及返回结果');
});

// index响应
app.get('/index', (req, res) => {
    console.log('主页面 index get请求');
    res.send('接收来自index的get请求');
});

app.get('/ab*cd', (req, res) => {
    console.log('主页面 ab*cd乱七八糟请求');
    res.send('你再瞎请求我就揍你');
});

var server = app.listen(9529, 'localhost', () => {
    var address = server.address();
    var host = address.address;
    var port = address.port;
    console.log('server is running at http: //%s,%s', host, port);
})
