var express = require('express');

const Server = express();

const Home = require('./expressDemo/apiRegister/router.js');

Server.all('*', (req, res, next) => {
    // console.log('req', req);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type');
    next();
})

Server.use('/home', Home);

const server = Server.listen(9529, 'localhost', () => {
    
    let address = server.address();
    let host = server.address().address;
    let port = address.port;

    console.log('访问地址 http://%s:%s', host, port);
});

