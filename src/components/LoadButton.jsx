import React from 'react'

const styleShown = {
    backgroundColor: 'blue'
};

const styleHidden = {
    backgroundColor: 'red'
};

const LoadButton = ({ text, showingStuff, handleClick }) => {
    return (
    <div>
        <button style={showingStuff ? styleShown : styleHidden} onClick={handleClick}>{text}</button>
    </div>
    );
}

export default LoadButton;