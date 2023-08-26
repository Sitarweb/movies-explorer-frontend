import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import image from '../../../images/movieCard.jpg';

function MoviesCard({}) {

  const { pathname } = useLocation();

  const [toggle, setToggle] = useState(false);
  const handleLike = () => setToggle(!toggle);

  return (
    <li className='moviesCard'>
      <img src={image} alt='изображение' />
      <div className="moviesCard__text">
        <h3 className="moviesCard__title">33 слова о дизайне</h3>
        <button
          className={`moviesCard__heart-button ${toggle ? 'moviesCard__heart-button-red' : ''} ${pathname === '/saved-movies' ? 'moviesCard__heart-button-saved' : ''}`}
          type="button"
          onClick={handleLike}
        />
      </div>
      <p className='moviesCard__duration'>1ч42м</p>
    </li >
  );
}

export default MoviesCard;