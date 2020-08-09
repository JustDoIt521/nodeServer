const mysql = require('../mysql/index.js');  // 引入数据库

function writeRecord (router) {
    router.get('/writeRecord', (req, res) => {
        // console.log('write', req.query);
        let date_ts = Date.now();
        mysql.query(`insert into punch_in (time_ts, id) values (${date_ts}, null)`, (err, rows, field) => {
            if (err) {
                console.log('err', err);
                res.write('fail');
            } else {
                res.write('success');
            }
            res.end();
        })
        // res.write('i know');
    })
}

function readRecod (router) {
    router.post('/readRecord', (req, res) => {
        console.log('read', req.body);
        res.write(JSON.stringify(req.body));
        res.end();
    })
}

module.exports = {
    writeRecord,
    readRecod,
}