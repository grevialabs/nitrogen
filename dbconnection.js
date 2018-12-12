const mysql = require('mysql');
const connection = mysql.createPool({

    host:'localhost',
    user:'admin',
    password:'admin',
    database:'apinode',
    port:3306

});

module.exports = connection;
