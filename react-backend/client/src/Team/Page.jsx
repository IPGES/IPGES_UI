import React from 'react';
import NavigationBar from '../Components/NavigationBar.jsx';
import NumInput from '../Components/NumInput.jsx';
import Footer from '../Components/Footer.jsx';

class TeamPage extends React.Component {
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
        <img src={require('./Santoso.jpg')} style={{width: 300}}/>
        <figcaption> Dr. Santoso, Professor in Charge </figcaption>
        <img src={require('./Braden.jpg')} style={{width: 300}}/>
        <figcaption> Braden Stotmeister - Protection System, Renewable Syncronization </figcaption>
        <img src={require('./Julia.png')} style={{width: 300}}/>
        <figcaption> Julia Conger - Variable Load, Control Algorithm </figcaption>
        <img src={require('./Joshua.jpg')} style={{width: 300}}/>
        <figcaption> Joshua Graham - Analog Intergrated Circuits, Photovoltaic Generator </figcaption>
        <img src={require('./Madeline.jpg')} style={{width: 300}}/>
        <figcaption> Madeline Jasper - Wind Generator, Control Algorithm </figcaption>
        <img src={require('./Jiahan.jpg')} style={{width: 300}}/>
        <figcaption> Jiahan Liu - Embedded System, UI </figcaption>
        <img src={require('./Kassandra.jpg')} style={{width: 300}}/>
        <figcaption> Kassandra Smith - Photovoltaic Generator, UI </figcaption>
        <img src={require('./Suma.jpg')} style={{width: 300}}/>
        <figcaption> Suma Jothibasu- Graduate Research Advisor </figcaption>
        <img src={require('./Alvaro.jpg')} style={{width: 300}}/>
        <figcaption> Alvaro Furlani - Graduate Research Advisor </figcaption>
        <Footer />
      </div>
    );
  }
}

export default TeamPage;
