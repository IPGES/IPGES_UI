import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import Grid from 'react-bootstrap/lib/Form'; //testing

class NavigationBar extends React.Component {
    constructor(props) {
      super(props);

      this.handleSelect = this.handleSelect.bind(this);
    }


    handleSelect(eventKey, event) {
      this.props.onTabChange(eventKey);
            /*
      alert('EventKey: ' + eventKey + '\n' +
            'Current State: ' + this.props.tab);
      this.setState({tab: eventKey});
            */
    }

    render() {
      //let brand = <a href='#'>Project Name</a>;
      return (
        <Navbar inverse collapseOnSelect onSelect={this.handleSelect}>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Intelligent Power Grid Experimental System</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
          <Nav right eventKey={0} href="#">
            <NavItem eventKey={0} href="#">
              Oneline
            </NavItem>
            <NavItem eventKey={1} href="#">
              Realtime Data
            </NavItem>
            <NavItem eventKey={2} href="#">
              Load vs Generation
            </NavItem>
            <NavItem eventKey={3} href="#">
              System Graph
  			    </NavItem>
            <NavItem eventKey={4} href="#">
      				Breaker Control
      			</NavItem>
            <NavItem eventKey={5} href="#">
              Team
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}

export default NavigationBar;
