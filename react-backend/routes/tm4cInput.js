var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var timeModel = require('../models/timeEntry.js');

/* GET users listing. */

router.post("/", function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

	var singleTimeEntry = new timeModel ({
	  time: req.body.time,
	  pv: req.body.pv,
	  inverter: req.body.inverter,
	  wind: req.body.wind,
	  grid: req.body.grid,
	  load: req.body.load
	});

	singleTimeEntry.save(function(err) {
	  if (err) throw err;
	  console.log('Time entry successfully saved.');
	});

	res.json("Database Write Success!");
});

module.exports = router;
