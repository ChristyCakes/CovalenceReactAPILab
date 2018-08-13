import React, { Component } from 'react';
import Top from './Top.jsx'
import { FilmCards } from './Film'
import LoadButton from './LoadButton.jsx'
import { VehicleCards } from './Vehicle'

class App extends Component {
  constructor() {
    super();

    this.state = {
      films: null,
      showFilms: false,
      vehicles: null,
      showVehicles: false
    };

    this.handleFilmClick = this.handleFilmClick.bind(this);
    this.handleVehicleClick = this.handleVehicleClick.bind(this);
  };

  handleFilmClick() {

    if (!this.state.showFilms) {
      // fetch data only if button click changes showFilms to true
      fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(data => this.setState({ films: data, showFilms: true }))
        .catch(e => console.log(e))
    } else {
      // if no button click, hide the data; no need to load it
      this.setState({ showFilms: false });  // change state with 2nd click of button
    }
  }

  handleVehicleClick() {

    if (!this.state.showVehicles) {
      fetch("https://ghibliapi.herokuapp.com/vehicles")
        .then(res => res.json())
        .then(data => this.setState({ vehicles: data, showVehicles: true }))
        .catch(e => console.log(e))
    } else {
      this.setState({ showVehicles: false });
    }
  }

  render() {

    return (
      <div>
        <Top />
        <LoadButton text={"Load Films"} showingStuff={this.state.showFilms} stuffType={"Films"} handleClick={this.handleFilmClick} />
        <LoadButton text={"Load Vehicles"} showingStuff={this.state.showVehicles} stuffType={"Vehicles"} handleClick={this.handleVehicleClick} />
        <FilmCards films={this.state.films} show={this.state.showFilms} />
        <VehicleCards vehicles={this.state.vehicles} show={this.state.showVehicles} />
      </div>
    )
  }
}

export default App;