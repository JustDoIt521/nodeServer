/*
var fileAPI = require('./fileAPI.js')

var express = require('express');
var fs = require('fs');
var url = require('url');

var connection = require('./expressDemo/mysqlOption/connectMysql.js');

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
    console.log(path);

    fileAPI(path.substr(1)).then(data  => {
        if (data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
    
            console.log('res success');
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
    
            console.log('res fail');
        }
        res.end();
    });
    
})

app.get('/register', (req, res) => {
    connection.query('select * from users', (err, data) => {
        console.log(data);
        if (err) {
            console.log('error', err);
            return;
        }
        res.send(data);
    })
})

var server = app.listen(9529, 'localhost', () => {

    let address = server.address();
    var host = server.address().address;
    var port = address.port;

    console.log('访问地址 http://%s:%s',host, port)
})
*/

var express = require('express');

const API = express();

const server = API.listen(9529, 'localhost', () => {
    
    let address = server.address();
    let host = server.address().address;
    let port = address.port;

    console.log('访问地址 http://%s:%s', host, port);
});

