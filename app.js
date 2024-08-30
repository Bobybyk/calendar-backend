const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
 
const app = express();

/* DB Setup with mongoose */
mongoose.connect('mongodb://localhost:27017/calendar-core-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('[MongoDB]\t Connection successful.'))
  .catch(() => console.log('[MongoDB]\t Connection failed!'))

// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
*/

const routes = require('./resources');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;