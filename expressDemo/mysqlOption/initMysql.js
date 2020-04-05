var mysql = require('mysql');
var dbConfig = require('./originMysql.js');

const connection = mysql.createConnection(dbConfig);
connection.connect();

module.exports = connection;

