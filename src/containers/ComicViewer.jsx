import React from 'react';
import ButtonContainer from './ButtonContainer';

const ComicViewer = ({comic, latest, comicChange}) => {

    return (
        <div>
            <h2>{comic.title.toUpperCase()}</h2>
            <ButtonContainer latest={latest} 
                             selected={comic.num} 
                             comicChange={comicChange}
                             />
            <img src={comic.img} alt={comic.alt}></img>
        </div>
    );
};

export default ComicViewer;