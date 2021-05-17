import React, {useState, useEffect} from 'react';
import ComicFavs from '../components/ComicFavs.jsx';
import ComicViewer from './ComicViewer.jsx';

const ComicContainer = () => {
    // track the following states:
    const [latestComic, setLatest] = useState(null); // the most recent comic strip id
    const [selectedComic, setSelectedComic] = useState(null); // the currently displayed comic strip
    const [favourites, setFavourites] = useState([]); // id of all comics flagged as favourites

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

    const addFavourite = (fav) => {
        // add a new comic to the favourites list
        const favs = [...favourites].push(fav);
        setFavourites(favs);
    };

    const removeFavourite = (favNum) => {
        const favs = [...favourites];
        const index = favs.findIndex(fav => {
            return fav.num === favNum;
        })
        favs.splice(index, 1);
        setFavourites(favs);
    }

    const navChange = (navOption) => {
        let n = null;
        switch (navOption) {
            case "prev":
                n = selectedComic.num - 1;
                break;
            case "random":
                n = Math.floor(Math.random() * latestComic) + 1;
                break;
            case "next":
                n = selectedComic.num + 1;
                break;
            default:
                return;
        };
        onComicChange(n);
    };

    const onComicChange = (num) => {
        // change displayed comic (requires fetch)
        fetch(`http://xkcd.com/${num}/info.0.json`)
        .then(comic => comic.json())
        .then(data => setSelectedComic(data));
    };

    return (
        <>
            <div>
                <h1>An XKCD tribute page</h1>
                <ComicFavs favs={favourites} selected={selectedComic} addFavourite={addFavourite} onComicChange={onComicChange}/>
            </div>
            <ComicViewer comic={selectedComic} latest={latestComic} comicChange={navChange}/>
            <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </>
    );
};

export default ComicContainer;