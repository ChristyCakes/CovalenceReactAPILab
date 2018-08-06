import React from 'react';
import Cards from './Cards.jsx'

const Films = (props) => {
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
    }

    return (
    
        // send props to Cards for display
    <Cards 
    titles={titles}
    descriptions={descriptions}
    directors={directors}
    producers={producers}
    />
    )
}

export default Films;