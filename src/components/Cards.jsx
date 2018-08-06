import React from 'react';
import Card from './Card.jsx'

const Cards = (props) => {
    let titles;
    let descriptions;
    let directors;
    let producers;

    // because filmsArray is from async fetch, use conditional to wait for it       
    if (props.filmsArray) {

        // extract wanted info from filmsArray
        titles = (props.filmsArray).map(film => film.title)
        descriptions = (props.filmsArray).map(film => film.description)
        directors = (props.filmsArray).map(film => film.director)
        producers = (props.filmsArray).map(film => film.producer)
    }

    return (
    <Card 
    titles={titles}
    descriptions={descriptions}
    directors={directors}
    producers={producers}
    />
    )
}

export default Cards;