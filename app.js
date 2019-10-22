const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const users = require('./api/users')
const trails = require('./api/trails.js')
const User = require('./models/user.js')

const app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/signup', User.signup)
app.post('/signin', User.signin)
app.use('/api/users', users)
app.use('/api/trails', trails)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
