import React from 'react';
import Grid from 'react-bootstrap/lib/Form';


//TODO: We will make this a text input and then lift the state up
class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StartTime: '',
      EndTime: ''
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStartChange(event) {
    this.setState({StartTime: event.target.value}); //runs on each keystroke to update the react state
  }

  handleEndChange(event) {
    this.setState({EndTime: event.target.value}); //runs on each keystroke to update the react state
  }

  handleSubmit(event) {
    this.props.onTimeSubmit(this.state.StartTime, this.state.EndTime);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Start Time:
          <input type="text" value={this.state.StartTime} onChange={this.handleStartChange} />
        </label>
        <label>
          End Time:
          <input type="text" value={this.state.EndTime} onChange={this.handleEndChange} />
        </label>
        <input type="submit" value="Gather Data" />
      </form>
    );
  }
}


export default NumInput;
