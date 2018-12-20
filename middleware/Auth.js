const express = require('express');
const router = express.Router();
const Key = require('../models/Key');

/* Check token valid or not */
var auth = function(req, res, next) {
  // res.render('index', { title: 'REST API' });

  Key.check(req.query.key, function(err,rows) {
    if(rows.length > 0) { 
      // key success
      next()
    } else {
      // Invalid key
      // res.render('unauthorized', { title: 'Unauthorized' });
      var resp = {};
      resp['is_ok'] = 1;
      resp['message'] = 'gagal';
      // res.end(res.JSON(resp));
      // res.end('yamete');
      res.end(JSON.stringify(resp));
    }
  })
}
      
module.exports = auth;
