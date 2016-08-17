var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var routes = require('./routes/index');
//var users = require('./routes/applicants');
var applicants = require('./routes/applicants')

var app = express();

var model = require('./models/applicants-sqlite3.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/*
app.use(
  sassMiddleware({
  src: __dirname + '/sass',
  dest: __dirname + '/public/stylesheets',
  debug: true
}));
*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/applicants', applicants)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//connect to sqlite3

//model.connect('./applicant.sqlite3', function(err){
//  if (err) throw err;
//})




module.exports = app;
