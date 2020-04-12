const mysql = require('../mysqlOption/initMysql.js');

const API = require('./index.js');

// // 初始页面
API.get('/index1.html', (res, req) => {
    console.log('req index1');
});

// 

// module.exports = API;