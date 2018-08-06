import React, { Component } from 'react';
import Top from './Top.jsx'
import Cards from './Cards.jsx'
import Films from './Films'

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
        <Films filmsArray={this.state.films} />
        <Cards />
      </div>

    )
  }
}

export default App;