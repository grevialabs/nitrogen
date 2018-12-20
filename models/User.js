const db = require('../dbconnection'); //reference of dbconnection.js
const md5 = require('md5');

var config = require('../config/config');

const User = {

    get: function(id, callback) {
        return db.query("SELECT * FROM api_users WHERE id = ?", [id], callback);
    },
    
    getList: function(start,limit,callback) {
        // return db.query("SELECT * FROM api_users LIMIT ?,?", [start,limit], callback);

        var q, start, limit;
        var response = {};
        var result = {};
        q = "SELECT * FROM api_users WHERE 1";

        response['totaldata'] = db.query(q,callback);

        if (! start) start = config.model.start; 
        if (! limit) limit = config.model.limit; 
        // if (start) {
            q += ' LIMIT ' + start;
        //     if (limit) {
                q += ' ,' + limit;
        //     }
        // } 
        // return db.query(q,callback);
        response['data'] = db.query(q,callback);
        // result = JSON.stringify(response);
        console.log('jalannih');
        console.log(result);
        console.log('dame');
        return result;
    },
    
    insert: function(user,callback) {
        return db.query("INSERT INTO api_users (name,email,`password`) VALUES (?,?,?)", [user.name,user.email,md5(user.password)], callback);
    },
    
    update: function(user,callback) {
        return db.query("UPDATE api_users SET name=?,email=?,password=? WHERE id=?", [user.name,user.email,md5(user.password),user.id], callback);
    },
    
    delete: function(id,callback) {
        return db.query("DELETE FROM api_users WHERE id=?",[id],callback);
    },

};

module.exports = User;
