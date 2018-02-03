var express = require('express');
var path = require('path'); //may not need
var mongoose = require("mongoose");

var index = require('./routes/index');
var zoomGraphNotes = require('./routes/zoomGraphNotes');
var individualGraph = require('./routes/individualGraph')
var totalsGraph = require('./routes/totalsGraph')

var mongoDB = "mongodb://localhost/IPGES";
mongoose.connect(mongoDB, function (err) {
  if (err) throw err;
  console.log("Connected to Mongo!");
});
var timeSchema = mongoose.Schema({
  time: Number,
  pv: Number,
  inverter: Number,
  wind: Number,
  grid: Number,
  load: Number
});

var TimeEntry = mongoose.model('ipgesModel', timeSchema);
var singleTimeEntry = new TimeEntry ({
  time: 1200,
  pv: 1,
  inverter: 2,
  wind: 3,
  grid: 4,
  load: 5
});
singleTimeEntry.save(function(err) {
  if (err) throw err;
  console.log('Time entry successfully saved.');
});
var dbResults = [];
TimeEntry.find({
  time: 1200
}).exec(function(err, dbResults) {
  if (err) throw err;
  console.log(dbResults);
});



var app = express();

app.use('/', index);
app.use('/zoomGraphNotes', zoomGraphNotes);
app.use('/individualGraph', individualGraph);
app.use('/totalsGraph', totalsGraph);

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
