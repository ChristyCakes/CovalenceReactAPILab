import React from 'react';
import Cards from './Cards.jsx'

const Films = (props) => {
    let filmInfo = [];
    
    // because filmsArray is from async fetch, use conditional to wait for it       
    if (props.filmsArray) {

        // loop through each film, create an object with 3 extracted properties for each film    
        for (let i of props.filmsArray) {
            i = {
                title: i.title,
                director: i.director,
                description: i.description
            },

            // append i to filmInfo array
            filmInfo.push(i);
        }
    }
    
    return <Cards filmInfo={filmInfo}/>
}

export default Films;