const fs = require('fs');

function readFile(req, res, file, type) {
    fs.readFile(file, (err, data) => {
        if (err) {
            printLog('yellow', `${file} not found`);
            res.writeHead(404, { 'Content-Type': 'text/html'})
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.write(data.toString());
        }
        res.end();
    })
}

module.exports = readFile
