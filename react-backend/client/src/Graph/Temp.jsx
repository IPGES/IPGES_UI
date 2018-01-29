import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import TM from 'fusioncharts/themes/fusioncharts.theme.fint';

charts(fusioncharts)



var staticChartConfigs = {
	id: "static-chart",
    renderAt: "static-chart-container",
	type: "zoomline",
	width:600,
    height: 350,
  	dataFormat: "json",
  	dataSource: myDataSource
};

class ZoomChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {staticChartConfigs: staticChartConfigs
		}
	}

  render() {
    return (
      <div>
        <ReactFC {...this.state.staticChartConfigs} />
      </div>
    );
  }
}

export default ZoomChart;
