import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IndividualGraph from './IndividualGraph/Page.jsx';
import RealtimeDataPage from './RealtimeData/Page.jsx';
import LoadVsGenerationPage from './LoadVsGeneration/Page.jsx';
import ControlsPage from './Controls/Page.jsx';
import DatabasePage from './Database/Page.jsx';
import TeamPage from './Team/Page.jsx';
import OnelinePage from './Oneline/Page.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {tab: 0}
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabNum) {
    //alert('tabNum : ' + tabNum);
    this.setState({tab: tabNum});
  }


  render() {
    switch (this.state.tab) {
      case 0: //MUST HAVE Renders on DEFAULT
        return (
          <div className="App">
            <OnelinePage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 1:
        return (
          <div className="App">
            <IndividualGraph onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 2:
        return (
          <div className="App">
            <LoadVsGenerationPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 3:
        return (
          <div className="App">
            <ControlsPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 4:
        return (
          <div className="App">
            <DatabasePage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 5:
          return (
            <div className="App">
              <RealtimeDataPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
            </div>
          );
          break;
      case 6:
          return (
            <div className="App">
              <TeamPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
            </div>
          );
          break;
    }
  }
}
export default App;
