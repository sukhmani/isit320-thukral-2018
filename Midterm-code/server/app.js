//import Router as router from 'express';
const express = require('express');
//const indexRouter = express.Router();
//const routes = require('./routes');
var createError = require('http-errors');
//var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
let users = require('./routes/users');
var sshRunner = require('./routes/ssh-runner');
var scriptPusher = require('./routes/script-pusher');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', users);
app.use('/script-pusher', scriptPusher);
app.use('/ssh-runner', sshRunner);
//app.use('/index','indexRouter');
app.use('indexRouter', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    'use strict';
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    'use strict';
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;