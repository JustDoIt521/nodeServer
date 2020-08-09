const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '784863455',
    database: 'node_test',
});

module.exports = connection;