var express = require('express');
var path = require('path');
var mongoose = require("mongoose");

//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var zoomGraphNotes = require('./routes/zoomGraphNotes');
var individualGraph = require('./routes/individualGraph');
var totalsGraph = require('./routes/totalsGraph');
var tm4cInput = require('./routes/tm4cInput');

var timeModel = require('./models/timeEntry.js');

var mongoDB = "mongodb://localhost/IPGES";
mongoose.connect(mongoDB, function (err) {
  if (err) throw err;
  console.log("Connected to Mongo!");
});

timeModel.collection.drop();

/*
singleTimeEntry.save(function(err) {
  if (err) throw err;
  console.log('Time entry successfully saved.');
});
var dbResults = [];
timeModel.find({
  time: 1200
}).exec(function(err, dbResults) {
  if (err) throw err;
  console.log(dbResults);
});*/

var app = express();

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

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
