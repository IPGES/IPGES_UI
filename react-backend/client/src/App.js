import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GraphPage from './Graph/Page.jsx';
import RealtimeDataPage from './RealtimeData/Page.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {tab: 0}

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabNum) {
    this.setState({tab: tabNum});
  }


  render() {
    switch (this.state.tab) {
      case 0:
        return (
          <div className="App">
            <GraphPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 1:
        return (
          <div className="App">
            <GraphPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 2:
        return (
          <div className="App">
            <RealtimeDataPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 3:
        return (
          <div className="App">
            <RealtimeDataPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
      case 4:
        return (
          <div className="App">
            <RealtimeDataPage onTabChange={this.handleTabChange} tab={this.state.tab}/>
          </div>
        );
        break;
    }
  }
}
export default App;
