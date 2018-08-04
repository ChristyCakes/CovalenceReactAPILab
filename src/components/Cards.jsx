import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Cards extends Component {
    render () {
        console.log(this.props.filmsArray)
        return null         
    }
}
        
// to do: loop through films array, set keys, extract title, description, director, producer, pass to card.jsx        

export default Cards;