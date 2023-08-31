import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import image from '../../../images/movieCard.jpg';

function MoviesCard({ movieData }) {

  const { pathname } = useLocation();

  const [toggle, setToggle] = useState(false);
  const handleLike = () => setToggle(!toggle);

  return (
    <li className='moviesCard'>
      <img src={image} alt={`${movieData.nameRU}`} />
      <div className="moviesCard__text">
        <h2 className="moviesCard__title">{movieData.nameRU}</h2>
        <button
          className={`moviesCard__heart-button ${toggle ? 'moviesCard__heart-button-red' : ''} ${pathname === '/saved-movies' ? 'moviesCard__heart-button-saved' : ''}`}
          type="button"
          onClick={handleLike}
        />
      </div>
      <p className='moviesCard__duration'>{movieData.duration}</p>
    </li >
  );
}

export default MoviesCard;