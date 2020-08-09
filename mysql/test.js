
// 临时文件 测试使用
const mysql = require('./index.js');

mysql.connect();

function searchToken() {
    mysql.query('select * from users', function(err, rows, fields) {
        if(err) {
            console.log('err', err);
            return;
        }

        console.log(rows);
        console.log(fields);
    })
}

module.exports = searchToken;