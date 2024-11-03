var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
const SignUpServices = require('./services/SignUpServices');
const LoginServices = require("./services/LoginServices.js")
const models = require("./models")
const mongoose = require("mongoose")

var app = express();

mongoose.connect("mongodb://localhost:27017/person")
.then(()=>console.log("db ok"))
.catch(()=>console.log("db err"))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.locals.models = {
  users : models.users,
  login : models.login
}

app.locals.services = {
  users : new SignUpServices(app.locals.models),
  login : new LoginServices(app.locals.models)
}


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
