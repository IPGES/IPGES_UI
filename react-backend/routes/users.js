var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  res.json([{
  	id: 1,
  	username: "Time Must be formmated HH:MM"
  }, {
  	id: 2,
  	username: "Time is 24 Hours so 1pm = 13"
  }]);
});

module.exports = router;
