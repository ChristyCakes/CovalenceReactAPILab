import React, { Component } from 'react';
import Top from './Top.jsx'
import Cards from './Cards.jsx'
import Card from './Card.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = { films: null };
  };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())    
      .then(data => this.setState({ films: data }))
      .catch(e => console.log(e))      
  }

  render() {
    return (
      <div>
        <Top />
        <Cards filmsArray={this.state.films} />
        <Card />
      </div>

    )
  }
}

export default App;