import React from 'react';

const Top = (props) => {
    
    return (
        <div className='top'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png' height="150px" alt="Studio Ghibli Films"></img>
            <button onClick={props.handleClick}>Load Films</button>
            <button onClick={props.handleClick2}>Load Vehicles</button>
        </div>
    )
}

export default Top;