import React, {useState, useEffect} from 'react';
import ComicFavs from '../components/ComicFavs.jsx';
import ComicViewer from './ComicViewer.jsx';

const ComicContainer = () => {

    const [latestComic, setLatest] = useState(null);
    const [selectedComic, setSelectedComic] = useState(null);
    const [favourites, setFavourites] = useState([]);

    useEffect( () => {
        getLatestComic();
    }, []);

    const getLatestComic = () => {
        fetch('http://xkcd.com/info.0.json')
        .then(comic => comic.json())
        .then(data => {
            setSelectedComic(data);
            setLatest(data.num);
        });
    };

    return (
        <>
            <div>
                <h1>An XKCD tribute page</h1>
                <ComicFavs favs={favourites}/>
            </div>
            <ComicViewer comic={selectedComic} latest={latestComic}/>   
        </>
    );
};

export default ComicContainer;