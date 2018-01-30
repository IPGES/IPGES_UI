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
        <img src={require('./OnelineImage.png')} style={{width: 900}}/>
        <h3> Please contact the Senior Design Team to describe the project </h3>
        <Footer />
      </div>
    );
  }
}

export default OnelinePage;
