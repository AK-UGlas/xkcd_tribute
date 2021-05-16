import React, {useState, useEffect} from 'react';

const ComicContainer = () => {

    const [favourites, setFavourites] = useState(null);

    useEffect( () => {
        getTodaysComic();
    }, []);

    const getTodaysComic = () => {
        fetch('http://xkcd.com/info.0.json')
            .then(comic => setFavourites(comic.json()))
    };

    return (
        <>
            <h1>An XKCD tribute page</h1>
            
        </>
    );
};

export default ComicContainer;