import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';

class RealtimeDataPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <NumInput />
      </div>
    );
  }
}

export default GraphPage;
