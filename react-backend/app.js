var express = require('express');
var path = require('path');
var mongoose = require("mongoose");

//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var zoomGraphNotes = require('./routes/zoomGraphNotes');
var individualGraph = require('./routes/individualGraph');
var totalsGraph = require('./routes/totalsGraph');
var tm4cInput = require('./routes/tm4cInput');

var timeModel = require('./models/timeEntry.js');

if(typeof process.env.PORT == 'undefined') {
  var mongoDB = "mongodb://localhost/IPGES";
} else {
  var mongoDB = process.env.MONGODB_URI;
}

mongoose.connect(mongoDB, function (err) {
  if (err) throw err;
  console.log("Connected to Mongo!");
});

var app = express();
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/', index);
app.use('/zoomGraphNotes', zoomGraphNotes);
app.use('/individualGraph', individualGraph);
app.use('/totalsGraph', totalsGraph);
app.use('/tm4cInput', tm4cInput);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

const port = process.env.PORT || 3500;
app.listen(port);

module.exports = app;
