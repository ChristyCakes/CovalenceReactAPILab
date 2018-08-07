import React, { Component } from 'react';
import Top from './Top.jsx'
import Cards from './Cards.jsx'
import Films from './Films'
import Vehicles from './Vehicles'
import Vcards from './Vcards.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      button: false,
      films: null,
      vbutton: false,
      vehicles: null
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  };

  handleClick() {
    this.setState(prevState => ({
      button: !prevState.button
    }));
  }

  handleClick2() {
    this.setState(prevState => ({
      vbutton: !prevState.vbutton
    }))
  }

  render() {

    if (this.state.button) {
      fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(data => this.setState({ films: data }))
        .catch(e => console.log(e))
    } else if (this.state.vbutton) {
      fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then(res => res.json())
      .then(data => this.setState({ vehicles: data }))
      .catch(e => console.log(e))
    }

    return (
      <div>
        <Top handleClick={this.handleClick} handleClick2={this.handleClick2} />
        <Films filmsArray={this.state.films} />
        <Cards />
        <Vehicles vehiclesArray={this.state.vehicles} />
        <Vcards />
      </div>

    )
  }
}

export default App;