import React from 'react';
import Card from './Card.jsx'

const Cards = (props) => {
    let titles;

    // because filmsArray is from async fetch, use conditional to wait for it       
    if (props.filmsArray) {
        titles = (props.filmsArray).map(film => film.title)
    }

    return (
    <Card titles={titles}/>
    )
}





// to do: loop through films array, set keys, extract title, description, director, producer, pass to card.jsx        

export default Cards;