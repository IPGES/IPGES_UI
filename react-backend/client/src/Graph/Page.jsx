import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';
import Chart from '../Graph/Chart.jsx';

class GraphPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <NumInput />
        <Chart />
        <Footer />
      </div>
    );
  }
}

export default GraphPage;
