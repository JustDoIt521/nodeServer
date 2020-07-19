const router = require('express').Router(); // 

const fs = require('fs');

router.get('/index.html', (req, res) => {
    fs.readFile('./asset/index.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html'})
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.write(data.toString());
        }
        res.end();
    })
})

module.exports = router;