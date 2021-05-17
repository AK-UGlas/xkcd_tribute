import React from 'react';

const ComicFavs = ({favs, selected, addFavourite, onFavouriteChange}) => {

    const favOptions = favs.map((fav, idx) => {
        return <option value={fav.num} key={idx}>{fav.title}</option>
    });

    const isFavourite = favs.includes(selected.num);

    const handleChange = (event) => {
        onFavouriteChange(event.target.value);
    }

    const handleUpdateFavs = (event) => {

    }

    return (
        <>
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>Load a favourite comic</option>
                {favOptions}
            </select>
            <button name="fav" onClick={handleUpdateFavs}>
                <img alt="lightbulb" src={isFavourite ? "../icons/idea-filled.png" : "../icons/idea.png"}>Add to Favs</img>
            </button>
        </>
    );
};

export default ComicFavs;