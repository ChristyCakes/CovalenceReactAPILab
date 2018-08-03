import React, { Component } from 'react';
import Top from './Top.jsx'
import Cards from './Cards.jsx'
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
  constructor() {
    super();
    this.state = { films: [] };
  };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())    
      .then(data => {
        this.setState({ films: data})
        console.log('state at App.js line 18:', this.state.films)
      })      
  }

  render() {
    return (
      <div>
        <Top />
        <Cards data={this.state.films} />
      </div>

    )
  }
}

export default App;