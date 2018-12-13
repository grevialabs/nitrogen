const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Key = require('../models/Key');
const constant = require('../helpers/Constants');

/* GET all users params {key,start,limit} */
router.get('/getList', function(req, res, next) {
    Key.check(req.query.key, function(err,rows) {
        if(rows.length > 0) { // key success
            User.getList(
                Number(req.query.start), 
                Number(req.query.limit), 
                function(errRes,rowsRes) {
                    if(errRes) {
                        res.json(errRes);
                    } else {
                        res.json(rowsRes);
                    }
                }
            );
        } else { // key failed
            res.render('unauthorized', { title: 'Unauthorized' });
        }
    });    
});

/* GET user by ID params {key,id} */
router.get('/get', function(req, res, next) {
    Key.check(req.query.key, function(err,rows) {
        if(rows.length > 0) { // key success
            User.get(
                Number(req.query.id), 
                function(errRes,rowsRes) {
                    if(errRes) {
                        res.json(errRes);
                    } else {
                        res.json(rowsRes);
                    }
                }
            );
        } else { // key failed
            res.render('unauthorized', { title: 'Unauthorized' });
        }
    });
});

/* POST add user params {key,name,email,password} */
router.post('/add', function(req,res,next) {
    Key.check(req.body.key, function(err,rows) {
        if(rows.length > 0) { // key success
            User.addUser(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                },
                function(errRes,rowsRes) {
                    if(errRes) {
                        res.json(errRes);
                    } else {
                        res.json(rowsRes);
                    }
                }
            );
        } else { // key failed
            res.render('unauthorized', { title: 'Unauthorized' });
        }
    });
});

/* UPDATE user params {key,id,name,email,password} */
router.put('/update',function(req,res,next) {
    Key.check(req.body.key, function(err,rows) {
        if(rows.length > 0) { // key success
            User.updateUser(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    id: req.body.id
                },
                function(errRes,rowsRes) {
                    if(errRes) {
                        res.json(errRes);
                    } else {
                        res.json(rowsRes);
                    }
                }
            );
        } else { // key failed
            res.render('unauthorized', { title: 'Unauthorized' });
        }
    });
});

/* DELETE user params {key,id} */
router.delete('/delete',function(req,res,next) {
    Key.check(req.body.key, function(err,rows) {
        if(rows.length > 0) { // key success
            User.deleteUser(req.body.id, function(errRes,rowsRes) {
                if(errRes) {
                    res.json(errRes);
                } else {
                    res.json(rowsRes);
                }
            });
        } else { // key failed
            res.render('unauthorized', { title: 'Unauthorized' });
        }
    });
});


module.exports = router;
