import React from 'react';

const ButtonContainer = ({latest, selected, comicChange}) => {
    
    const handlePicChange = (event) => {
        comicChange(event.target.name);
    };

    return (
        <div className="btnDisplay" >
            <button name="prev" onClick={handlePicChange} disabled={selected < 1}>Prev</button>
            <button name="random" onClick={handlePicChange}>Random</button>
            <button name="next" onClick={handlePicChange} disabled={selected === latest}>Next</button>
        </div>
    );
};

export default ButtonContainer;