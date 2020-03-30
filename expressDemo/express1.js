var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('hello express');
})

var server = app.listen(9529, 'localhost', () => {

    let address = server.address();
    var host = server.address().address;
    var port = address.port;

    console.log('访问地址 http://%s:%s',host, port)
})