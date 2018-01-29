var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  res.json([{
  	id: 1,
  	username: "Jiahan"
  }, {
  	id: 2,
  	username: "Joshua"
  }]);
});

module.exports = router;
