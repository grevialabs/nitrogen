const mysql = require('mysql');
const config = require('./config/config');
const connection = mysql.createPool({

    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port

});

module.exports = connection;
