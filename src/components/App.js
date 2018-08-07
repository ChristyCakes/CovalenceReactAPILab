import React, { Component } from 'react';
import Top from './Top.jsx'
import Cards from './Cards.jsx'
import Films from './Films'

class App extends Component {
  constructor() {
    super();
    this.state = {
      button: false,
      films: null
    };
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick() {
    this.setState(prevState => ({
      button: !prevState.button
    }));
  }

  render() {

    if (this.state.button) {
      fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(data => this.setState({ films: data }))
        .catch(e => console.log(e))
    }

    return (
      <div>
        <Top handleClick={this.handleClick} />
        <Films filmsArray={this.state.films} />
        <Cards />
      </div>

    )
  }
}

export default App;