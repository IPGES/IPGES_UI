import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';

class OnelinePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {tab: 0}

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabNum) {
    this.props.onTabChange(tabNum);
  }

  render() {
    return (
      <div>
        <NavigationBar onTabChange={this.handleTabChange}/>
        <h1> IPGES Oneline </h1>
        <img src={require('./OnelineImage.png')} style={{width: 800}}/>
        <p>
          <br />
          IPGES provides a control system solution managing renewable energy
          on the transmission and distribution level.
          <br />
          The team’s solution addresses three engineering challenges:
          integrating a transmission and distribution grid model with
          renewable energy resources, designing a control system, and
          implementing protections elements.
          <br />
          The public demand for renewable energy sources has increased
          steadily over the past decade, with solar and wind energy devices
          in highest demand. These sources rely, however, on two unpredictable
          inputs: solar insolation and wind speed. Renewable energy sources,
          therefore, supply power intermittently, leading to energy mismatch
          and reverse power flow that can damage grid infrastructure.
          <br />
          The goal of the Intelligent Power Grid Experimental System is,
          therefore, to design a system which will allow users to simulate
          real-life scenarios and test controls which mitigate these effects.
          The planned design comprises of three sections: the grid model, a
          controls system, and protections. These components simulate the
          essential elements of the power grid. The grid model is developed
          on top of three previous projects: a grid system, a solar simulator,
          and a wind simulator. The combination of these models allows us to
          implement simulations which vary the supply and demand to match
          real-world data. The controls system varies system demand to maintain
          the grid at a stable frequency used in actual, full-scale power
          grids. The protections are also based on realistic relay and circuit
          breaker model that prevents damage to a grid.
        </p>
        <img src={require('./JoshWorking.jpg')} style={{width: 800}}/>
        <p>
          <br />
          Here is our team working on it. The process took 9 months. The process
          involved planning and engineering. 
          <br />
        </p>
        <Footer />
      </div>
    );
  }
}

export default OnelinePage;
