const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const users = require('./api/users')
const trails = require('./api/trails.js')
const User = require('./models/user.js')
const user_trails = require('./api/user_trails')


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
app.use('/api/usertrails', user_trails)


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {

//   // render the error page
//   res.status(err.status || 500);
//   res.json('error');
// });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.exports = app;
