import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';
import Chart from './Chart.jsx';

var myDataSource = {
		chart: {
		  	caption: "IPGES Power Flow",
        numberSuffix: "milli",
        "yaxisname": "Volts/Amps",
        "xaxisname": "Time",
        "yaxisminValue": "0",
        "yaxismaxValue": "25000",
        "forceAxisLimits" : "0",
        "pixelsPerPoint": "1",
        "pixelsPerLabel": "24",
        "lineThickness": "1",

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
    "categories": [{
  "category":  "Jan 01|Jan 02|Jan 03|"
      }],
      "dataset": [
				{
					seriesname : "PV",
					"data": "978|976|955"
				},
				{
					seriesname : "Inverter",
					data: "1053|1057|1084"
				},
				{
					seriesname : "Wind",
					data: "1053|1057|1084"
				},
				{
					seriesname : "Grid",
					data: "1053|1057|1084"
				},
				{
					seriesname : "Load",
					data: "1053|1057|1084"
				}
      ]
}

var staticChartConfigs = {
	id: "static-chart",
    renderAt: "static-chart-container",
	type: "zoomline",
	width:600,
    height: 350,
  	dataFormat: "json",
  	dataSource: myDataSource
};

class IndividualGraphPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {zoomGraphNotes: [],
                  tab: 0,
                  childChartConfigs: staticChartConfigs,
                  dataSource : myDataSource,
                }

    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTimeSubmit = this.handleTimeSubmit.bind(this);
    this.updateChartData = this.updateChartData.bind(this);
  }

  handleTabChange(tabNum) {
    this.props.onTabChange(tabNum);
  }

  handleTimeSubmit(timeStart, timeEnd) {
		var splitStartTime = timeStart.split(':');
		var splitEndTime = timeEnd.split(':');
	  alert('StartTime: ' + splitStartTime[0] + splitStartTime[1] + '\n' +
    'EndTime: ' + splitEndTime[0] + splitEndTime[1]);
		var API = '/individualGraph'

    fetch(API, {
			method: 'post',
			headers: {
      	'content-type': 'application/json'
    	},
			body: JSON.stringify({
				start: (splitStartTime[0] + splitStartTime[1]) * 100,
        end: (splitEndTime[0] + splitEndTime[1]) * 100,
      })
		})
      .then(res => res.json())
      .then(newData => (
        this.setState((prevState, props) => ({ dataSource: newData[0]}))
      ))
      .then(() => (this.updateChartData()))
  }

	updateChartData() {
		this.setState((prevState, props) => ({
      ...prevState,
      childChartConfigs: {
        ...prevState.childChartConfigs,
        dataSource : prevState.dataSource
      }
		}));
  }

  componentDidMount() {
    fetch('/zoomGraphNotes')
      .then(res => res.json())
      .then(zoomGraphNotes => {
        this.setState({ zoomGraphNotes })
      })

			var timeStart = "00:00";
			var timeEnd = "24:00";
			var splitStartTime = timeStart.split(':');
			var splitEndTime = timeEnd.split(':');
			var API = '/individualGraph'

			fetch(API, {
				method: 'post',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					start: (splitStartTime[0] + splitStartTime[1]) * 100,
					end: (splitEndTime[0] + splitEndTime[1]) * 100,
				})
			})
				.then(res => res.json())
				.then(newData => (
					this.setState((prevState, props) => ({ dataSource: newData[0]}))
				))
				.then(() => (this.updateChartData()))
  }


  render() {
    return (
      <div>
        <NavigationBar onTabChange={this.handleTabChange}/>
        <NumInput onTimeSubmit={this.handleTimeSubmit}/>
        <Chart chartConfig={this.state.childChartConfigs}/>
        <h4>Notes</h4>
        {this.state.zoomGraphNotes.map(zoomGraphNotes =>
          <div key={zoomGraphNotes.id}>{zoomGraphNotes.username}</div>
        )}
        <Footer />
      </div>
    );
  }
}

export default IndividualGraphPage;
