import React from 'react';

const ComicFavs = ({favs, onFavouriteChange}) => {

    const favOptions = favs.map((fav, idx) => {
        return <option value={fav.num}>{fav.title}</option>
    });

    const handleChange = (event) => {
        onFavouriteChange(event.target.value);
    }

    return (
        <select onChange={handleChange}>
            <option disabled>Load a favourite comic</option>
            {favOptions}
        </select>
    );
};

export default ComicFavs;