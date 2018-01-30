import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';
import Chart from './Chart.jsx';

var myDataSource = {
		chart: {
		  	caption: "Load Power Consumption",
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

class IndividualGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {users: [],
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
    const API = '/zoomChart'
    const QUERY = '';
    alert('StartTime: ' + timeStart + '\n' +
    'EndTime: ' + timeEnd);

    fetch(API + QUERY)
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
  

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users })
      })
  }

  render() {
    return (
      <div>
        <NavigationBar onTabChange={this.handleTabChange}/>
        <NumInput onTimeSubmit={this.handleTimeSubmit}/>
        <Chart chartConfig={this.state.childChartConfigs}/>
        <h4>Notes</h4>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <Footer />
      </div>
    );
  }
}

export default IndividualGraph;
