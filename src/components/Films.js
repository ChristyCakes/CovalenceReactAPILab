import React from 'react';
import Cards from './Cards.jsx'

const Films = (props) => {
    let filmInfo = [];
    
    // because filmsArray is from async fetch, use conditional to wait for it       
    if (props.filmsArray && props.show) {

        // loop through each film, create an object with 3 extracted properties for each film    
        for (let i of props.filmsArray) {
            i = {
                key: i.id,
                title: i.title,
                director: i.director,
                description: i.description
            }

            // append each set of 3 to filmInfo array
            filmInfo.push(i);
        }
    }
    return <Cards filmInfo={filmInfo}/>
}

export default Films;