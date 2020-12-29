const mysql = require('mysql');

const conn = mysql.createPool({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b4061bbc2d1d31',
    password: '967b1865',
    database: 'heroku_2f69a0efed0e2f4'
});

module.exports = conn;