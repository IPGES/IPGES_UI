var express = require('express');
var router = express.Router();
var timeModel = require('../models/timeEntry.js');

//'/start/:starttime/end/:endtime'
/* GET users listing. */
router.post('/', function(req, res) {
	// Comment out this line:
  //res.send('respond with a resource');

	console.log("Start Time: ", req.body.start);
	console.log("End Time: ", req.body.end);

	globalDbResults = [];

	var queryPromise = query(req.body.start, req.body.end);
	queryPromise.then(function(dbResults) {
		jsonResponse = [{
			chart : {
				caption: "IPGES Voltage, Current",
				numberSuffix: "milli",
				"yaxisname": "Volts/Amps",
				"xaxisname": "Time",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "30000",
				"forceAxisLimits" : "1",
				"pixelsPerPoint": "1",
				"pixelsPerLabel": "24",
				"lineThickness": "1",

				"formatNumber": '0',
				"formatNumberScale": '0',
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
					seriesname : "NA",
					data: ""
				},
				{
					seriesname : "Load VRMS",
					data: ""
				},
				{
					seriesname : "Load IRMS",
					data: ""
				},
				{
					seriesname : "Dist VRMS",
					data: ""
				},
				{
					seriesname : "Dist IRMS",
					data: ""
				}
			]
		}];

		timeString = "";
		pvString = "";
		inverterString = "";
		windString = "";
		gridString = "";
		loadString = "";
		if(dbResults.length > 0) {
			timeString += dbResults[0].time;
			pvString += dbResults[0].pv;
			inverterString += dbResults[0].inverter;
			windString += dbResults[0].wind;
			gridString += dbResults[0].grid;
			loadString += dbResults[0].load;
		}
		if(dbResults.length > 1) {
			for(i = 1; i < dbResults.length; i++) {
				timeString += "|";
				pvString += "|";
				inverterString += "|";
				windString += "|";
				gridString += "|";
				loadString += "|";
				timeString += dbResults[i].time;
				pvString += dbResults[i].pv;
				inverterString += dbResults[i].inverter;
				windString += dbResults[i].wind;
				gridString += dbResults[i].grid;
				loadString += dbResults[i].load;
			}
		}

		jsonResponse[0].categories[0].category = timeString;
		jsonResponse[0].dataset[0].data = pvString;
		jsonResponse[0].dataset[1].data = inverterString;
		jsonResponse[0].dataset[2].data = windString;
		jsonResponse[0].dataset[3].data = gridString;
		jsonResponse[0].dataset[4].data = loadString;
		return jsonResponse;
	}).then(function(jsonResponse) {
		res.json(jsonResponse);
	})
})

function query(starttime, endtime) {
	var query = {
		$gte: starttime, $lte: endtime
	};
	return new Promise(function(resolve, reject) {
		timeModel.find({
			time: query
		}, (err, dbResults) => {
			if(err) {
				reject(err);
			} else {
				resolve(dbResults);
			}
		})
	})
}

module.exports = router;
