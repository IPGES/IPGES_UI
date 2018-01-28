import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';
import Chart from './Chart.jsx';

class GraphPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {users: [],
                  tab: 0}

    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTimeSubmit = this.handleTimeSubmit.bind(this);
  }

  handleTabChange(tabNum) {
    this.props.onTabChange(tabNum);
  }

  handleTimeSubmit(tabNum) {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }


  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
  }

  render() {
    return (
      <div>
        <NavigationBar onTabChange={this.handleTabChange}/>
        <NumInput onTimeSubmit={this.handleTimeSubmit}/>
        <Chart />
        <Footer />
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default GraphPage;
