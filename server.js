var express = require('express');
// var url = require('url');

const Server = express();
const Home = require('./expressDemo/apiRegister/router.js');

const { setToken } = require('./utils/methods.js');

Server.all('*', (req, res, next) => {
    console.log('req.token', req.headers.token);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'token'); // 允许浏览器可以拿到响应头内的token
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,token');
    res.header('token', setToken());
    next();
})

Server.use('/home', Home);

const server = Server.listen(9529, 'localhost', () => {
    
    let address = server.address();
    let host = server.address().address;
    let port = address.port;

    console.log('访问地址 http://%s:%s', host, port);
});

