import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';
import Chart from './Chart.jsx';

var myDataSource = {
		chart: {
		  	caption: "Load Vs Generation",
        numberSuffix: "milliwatts",
        "yaxisname": "Watts",
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
					"data": "978|976|955"
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

class LoadVsGenerationPage extends React.Component {
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
		var API = '/totalsGraph'

		fetch(API, {
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				start: (splitStartTime[0] + splitStartTime[1]) * 100,
				end: (splitEndTime[0] + splitEndTime[1]) * 100
			})
		})
			.then(res => res.json())
			.then(newData => (
				this.setState((prevState, props) => ({dataSource: newData[0]}))
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

export default LoadVsGenerationPage;
