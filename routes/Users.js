const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Key = require('../models/Key');
const constant = require('../helpers/Constants');

/* GET all users params {key,start,limit} */
// router.get('/getList', function(req, res, next) {
router.get('/get_all_users', function (req, res, next) {
    var start, limit = 0;
    if (req.query.start) start = req.query.start;
    if (req.query.limit) limit = req.query.limit;

    User.getList(
        Number(start),
        Number(limit),
        function (errRes, rows) {
            if (errRes) {
                res.json(errRes);
            } else {
                // var data = new Array();
                var data = {};
                data = rows;
                // console.log(rows);
                res.json(data);
                // res.send(data);
                // res.json(JSON.stringify(data));
            }
        }
    );

});

/* GET user by ID params {key,id} */
router.get('/get', function (req, res, next) {
    User.get(
        Number(req.query.id),
        function (errRes, rows) {
            if (errRes) {
                res.json(errRes);
            } else {
                res.json(rows);
            }
        }
    );
});

/* POST add user params {key,name,email,password} */
router.post('/insert', function (req, res, next) {
    User.insertUser(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        function (errRes, rows) {
            if (errRes) {
                res.json(errRes);
            } else {
                res.json(rows);
            }
        }
    );
});

/* UPDATE user params {key,id,name,email,password} */
router.put('/update', function (req, res, next) {
    User.updateUser(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            id: req.body.id
        },
        function (errRes, rows) {
            if (errRes) {
                res.json(errRes);
            } else {
                res.json(rows);
            }
        }
    );
});

/* DELETE user params {key,id} */
router.delete('/delete', function (req, res, next) {
    User.deleteUser(req.body.id, function (errRes, rows) {
        if (errRes) {
            res.json(errRes);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
