import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

//charts(FusionCharts)

class Chart extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>University of Texas 2018</p>
        </footer>
      </Grid>
    );
  }
/*
  var chartConfigs = {
      type: "Column2D",
      className: "fc-column2d", // ReactJS attribute-name for DOM classes
      dataFormat: "JSON",
      dataSource: {
          chart:{},
          data: [{value: 500}, {value: 600}, {value: 700}]
      }
  };

  render() {
    return (
      <ReactFC {...chartConfigs} />
    );
  }
  */
}

export default Chart;
