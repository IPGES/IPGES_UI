var mongoose = require("mongoose");

var timeSchema = mongoose.Schema({
  time: Number,
  pv: Number,
  inverter: Number,
  wind: Number,
  grid: Number,
  load: Number
});

module.exports = mongoose.model('ipgesModel', timeSchema);
