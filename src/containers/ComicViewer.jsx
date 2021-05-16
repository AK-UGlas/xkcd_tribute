import React from 'react';

const ComicViewer = ({comic, latest}) => {

    return (
        <>
            <h2>{comic.title.toUpperCase()}</h2>
            <img src={comic.img} alt={comic.alt}></img>
        </>
    );
};

export default ComicViewer;