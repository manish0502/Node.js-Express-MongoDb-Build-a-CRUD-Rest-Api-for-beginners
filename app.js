var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./config/db');

// @making mongo connection

connectDB();

//var mongoose = require('mongoose')  //Step1 && creating db.js file is step2

//var db= require('./DbConnection/db').DB_URL; //step3

//mongoose.connect(db ,{ useNewUrlParser: true });   // step 4



//mongoose.connection.on("connected" , () => {

  // console.log('connected to MongoDb using Mongoose'); // step5
//})



// @routes setup

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var orderRouter = require('./routes/order');
var studentRouter = require('./routes/student');
var app = express();

// @importing model
var studentModel = require('./models/student');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// @using those api routes

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/order' , orderRouter);
app.use('/student' , studentRouter);

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
