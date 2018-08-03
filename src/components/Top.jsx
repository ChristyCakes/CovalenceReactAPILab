import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';


const Top = props => {
    return (
        <div className='top'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png' height="150px" alt="Studio Ghibli Films"></img>
            <button>Load Films</button>
        </div>
    )
}

export default Top;