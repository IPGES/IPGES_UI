import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

charts(fusioncharts)



class RealtimeChart extends React.Component {
  render() {
    return (
      <div>
        <ReactFC {...staticChartConfigs} />
      </div>
    );
  }
}

export default RealtimeChart;
