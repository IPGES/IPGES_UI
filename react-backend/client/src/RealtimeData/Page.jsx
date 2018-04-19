import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';
import Chart from './Chart.jsx';
import ReactInterval from 'react-interval';

var myDataSource = {
		chart: {
		  	caption: "Realtime Data",
        numberSuffix: "W",
        "yaxisname": "Power",
        "xaxisname": "Time",
        "yaxisminValue": "0",
        "yaxismaxValue": "1400",
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

class RealtimeDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
                  timeNowComputer: 20,
                  timeNowHuman: 20,
                  tab: 0,
                  childChartConfigs: staticChartConfigs,
                  dataSource : myDataSource,
                }

    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTimeSubmit = this.handleTimeSubmit.bind(this);
    this.updateChartData = this.updateChartData.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
  }

  handleTabChange(tabNum) {
    this.props.onTabChange(tabNum);
  }

  handleTimeSubmit() {
		var splitStartTime = this.state.timeNowComputer - 19;
		var splitEndTime = this.state.timeNowComputer;
    /*
	  alert('StartTime: ' + splitStartTime + '\n' +
    'EndTime: ' + splitEndTime);
    */
		var API = '/individualGraph'

    fetch(API, {
			method: 'post',
			headers: {
      	'content-type': 'application/json'
    	},
			body: JSON.stringify({
				start: splitStartTime,
				end: splitEndTime,
      })
		})
      .then(res => res.json())
      .then(newData => (
        this.setState((prevState, props) => ({ dataSource: newData[0] }))
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

  getCurrentTime() {
    var humanFormattedTime = new Date().toLocaleTimeString('it-IT');
    var humanFormattedArray = humanFormattedTime.split(':')
    var computerFormattedTime = humanFormattedArray[0] + humanFormattedArray[1] + humanFormattedArray[2];
    this.setState({timeNowHuman: humanFormattedTime});
    this.setState({timeNowComputer: computerFormattedTime});
  }
/*
  componentDidMount() {

  } */

  render() {
    return (
      <div>
        <NavigationBar onTabChange={this.handleTabChange}/>
        <Chart chartConfig={this.state.childChartConfigs}/>
        <h2>Current Time {this.state.timeNowHuman}!</h2>
        <ReactInterval timeout={1000} enabled={true}
            callback={this.handleTimeSubmit} />
        <ReactInterval timeout={1000} enabled={true}
            callback={this.getCurrentTime} />
        <Footer />
      </div>
    );
  }
}

export default RealtimeDataPage;
