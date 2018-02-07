var express = require('express');
var router = express.Router();
var timeModel = require('../models/timeEntry.js');

/*
router.use(function timeLog(req, res, next) {
	req.requestTime = Date.now();
	next();
})
*/


/* GET users listing. */
//router.get('/start/:startime/end/:endtime', function(req, res, next) {
router.get('/start/:starttime/end/:endtime', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

	console.log("Start Time: ", req.params.starttime);
	console.log("End Time: ", req.params.endtime);

	timeModel.find({
		$and: [{"time": {$gt:req.params.starttime - 1}},
		{"time": {$lt:req.params.endtime + 1}}]
	}, (err, dbResults) => {
		if (err) {
			console.log("search error");
		}
		next.dbResults = dbResults;
	});
}, function (req, res, next) {
	//console.log(next.dbResults);
	nparsedTimes = "";
	if(next.dbResults.length > 0) {
		next.parsedTimes += next.dbResults[0].time;
		if(next.dbResults.length > 1) {
			for(i = 1; i < next.dbResults.length; i++) {
				next.parsedTimes += "|" + next.dbResults[i].time;
			}
		}
	}

	next.parsedPV = "";
	if(next.dbResults.length > 0) {
		next.parsedPV += next.dbResults[0].pv;
		if(next.dbResults.length > 1) {
			for(i = 1; i < next.dbResults.length; i++) {
				next.parsedPV += "|" + next.dbResults[i].pv;
			}
		}
	}

	next.parsedInverter = "";
	if(next.dbResults.length > 0) {
		next.parsedInverter += next.dbResults[0].inverter;
		if(next.dbResults.length > 1) {
			for(i = 1; i < next.dbResults.length; i++) {
				next.parsedInverter += "|" + next.dbResults[i].inverter;
			}
		}
	}

	next.parsedWind = "";
	if(next.dbResults.length > 0) {
		next.parsedWind += next.dbResults[0].wind;
		if(next.dbResults.length > 1) {
			for(i = 1; i < next.dbResults.length; i++) {
				next.parsedWind += "|" + next.dbResults[i].wind;
			}
		}
	}

	next.parsedGrid = "";
	if(next.dbResults.length > 0) {
		next.parsedGrid += next.dbResults[0].grid;
		if(next.dbResults.length > 1) {
			for(i = 1; i < next.dbResults.length; i++) {
				next.parsedGrid += "|" + next.dbResults[i].grid;
			}
		}
	}

	next.parsedLoad = "";
	if(next.dbResults.length > 0) {
		next.parsedLoad += next.dbResults[0].load;
		if(next.dbResults.length > 1) {
			for(i = 1; i < next.dbResults.length; i++) {
				next.parsedLoad += "|" + next.dbResults[i].load;
			}
		}
	}
	next();
}, function (req, res, next) {
	next.returnList = [{
		chart : {
			caption: "IPGES Power Flow",
			numberSuffix: "W",
			"yaxisname": "Power",
			"xaxisname": "Time",
			"yaxisminValue": "0",
			"yaxismaxValue": "1500",
			"forceAxisLimits" : "1",
			"pixelsPerPoint": "1",
			"pixelsPerLabel": "24",
			"lineThickness": "1",

			"compactdatamode" : "1",
			"dataseparator" : "|",

			"showBorder" : "1",
			"borderThickness" : "3",
			"borderColor" : "#cc5500",
			"borderAlpha" : "100",

			"showCanvasBorder" : "1",
			"canvasBorderThickness" : "3",
			"canvasBorderColor" : "#cc5500",
			"canvasBorderAlpha" : "100",

			"color" : "#100",

		},
		categories : [{
			category: ""
		}],
		dataset : [
			{
				seriesname : "PV",
				data: ""
			},
			{
				seriesname : "Inverter",
				data: ""
			},
			{
				seriesname : "Wind",
				data: ""
			},
			{
				seriesname : "Grid",
				data: ""
			},
			{
				seriesname : "Load",
				data: ""
			}
		]
	}];

	next.returnList[0].categories[0].category = next.parsedTimes;
	next.returnList[0].dataset[0].data = next.parsedPV;
	next.returnList[0].dataset[1].data = next.parsedInverter;
	next.returnList[0].dataset[2].data = next.parsedWind;
	next.returnList[0].dataset[3].data = next.parsedGrid;
	next.returnList[0].dataset[4].data = next.parsedLoad;


	res.json(next.returnList);
});

module.exports = router;
