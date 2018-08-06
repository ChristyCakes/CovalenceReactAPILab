import React from 'react';
import Cards from './Cards.jsx'

const Films = (props) => {
    let filmInfo;

    // because filmsArray is from async fetch, use conditional to wait for it       
    if (props.filmsArray) {

        // create an object for the wanted film info
        filmInfo = {

            // extract specifics from filmsArray
            titles: (props.filmsArray).map(film => film.title),
            directors: (props.filmsArray).map(film => film.director),
            descriptions: (props.filmsArray).map(film => film.description)
        }
    }

    // send object as props to Cards for display
    return <Cards { ...filmInfo}/>
}

export default Films;