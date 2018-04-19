import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import TM from 'fusioncharts/themes/fusioncharts.theme.fint';

charts(fusioncharts)

class ZoomChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactFC {...this.props.chartConfig} />
      </div>
    );
  }
}

export default ZoomChart;
