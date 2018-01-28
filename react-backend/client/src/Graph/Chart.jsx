import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

charts(fusioncharts)

var myDataSource = {
		chart: {
		  	caption: "Load Power Consumption",
		  	numberSuffix: "W",
		  	theme: "ocean"
		},
		data:[
			{
			  	label: "Bakersfield Central",
			  	value: "880000"
			},
			{
			  	label: "Garden Groove harbour",
			  	value: "730000"
			},
			{
			  	label: "Los Angeles Topanga",
			  	value: "590000"
			},
			{
			  	label: "Compton-Rancho Dom",
			  	value: "520000"
			},
			{
			  	label: "Daly City Serramonte",
			  	value: "330000"
			}
		]
	},

	powerChartConfigs = {
		id: "power-chart",
	    renderAt: "revenue-chart-container",
		type: "column2d",
		width:600,
	    height: 400,
	  	dataFormat: "json",
	  	dataSource: myDataSource
	};

class Chart extends React.Component {
  render() {
    return (
      <ReactFC {...powerChartConfigs} />
    );
  }
}

export default Chart;
