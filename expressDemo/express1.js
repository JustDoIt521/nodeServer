var express = require('express');
var fs = require('fs');
var url = require('url');

var app = express();
// app.use('/files', express.static('files'));

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('hello express');
    }, 3000)
})


let pathArr = {
    'index.html': '../index.html'
}
app.get('/index.html', (req, res) => {
    // console.log(url.parse(req.url).pathname)
    let path = url.parse(req.url).pathname;
    // res.send('nothing');

    fs.readFile(pathArr[path.substr(1)], (err, data) => {
        if (err) {
            console.log(err);
            console.log('res fail');
            // res.send('not found');
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
            console.log('res success');
        }
        res.end();
    })
})

var server = app.listen(9529, 'localhost', () => {

    let address = server.address();
    var host = server.address().address;
    var port = address.port;

    console.log('访问地址 http://%s:%s',host, port)
})