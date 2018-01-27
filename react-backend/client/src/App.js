import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GraphPage from './Graph/Page.jsx';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <GraphPage />,
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}
export default App;

/*
return (
  <div className="App">
    <h1>Users</h1>
    {this.state.users.map(user =>
      <div key={user.id}>{user.username}</div>
    )}
  </div>
);
*/
