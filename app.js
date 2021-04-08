const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* middleware */
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Middleware auth check token start */
// checkAuth = require('./middleware/Auth');
// app.use(checkAuth);
/* Middleware auth check token end */

/* Routes */
const v1 = '/v1/';
// app.use('/v1', v1);

// console.log

const index = require('./routes/Index');

// ------------------
// API here
const users = require('./routes/Users');
// ------------------

app.use(v1 + 'index', index);
app.use(v1 + 'users', users);

/* Export to server.js */
module.exports = app;