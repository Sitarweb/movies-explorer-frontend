import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EXTERNAL_URL } from '../../../constants/constants';
import duration from '../../../utils/Utils';

function MoviesCard({ movieData, savedMovies, onSaveMovie, onDeleteMovie }) {

  const { pathname } = useLocation();
  const [isLike, setLike] = useState(false);
  const [isLikeImage, setLikeImage] = useState(false);
  const [cardId, setCardId] = useState('');

  function handleClick() {
    setLike(savedMovies.some((item) => { // Проверяем лайкнут фильм или нет
      if (item.movieId === movieData.movieId) { // Проверяем наличие св-ва movieId т.к оно есть только у залайканных
        setCardId(item._id);
        return true;
      } else return false;
    }));
    if (!isLike) {
      onSaveMovie(movieData);
      setLikeImage(true);
    } else {
      onDeleteMovie(movieData._id ? movieData._id : cardId);
      setLikeImage(false);
    }
  }

  return (
    <li className='moviesCard'>
      <a className='moviesCard__trailerLink' href={movieData.trailerLink} target='_blank' rel='noreferrer'>
        <img className='moviesCard__preview' src={ pathname === '/movies' ? `${EXTERNAL_URL}${movieData.image.url}` : movieData.image} alt={`${movieData.nameRU}`} />
      </a>
      <div className="moviesCard__text">
        <h2 className="moviesCard__title">{movieData.nameRU}</h2>
        <button
          className={`moviesCard__heart-button ${isLikeImage ? 'moviesCard__heart-button-red' : ''} ${pathname === '/saved-movies' ? 'moviesCard__heart-button-saved' : ''}`}
          type="button"
          onClick={handleClick}
        />
      </div>
      <p className='moviesCard__duration'>{duration(movieData.duration)}</p>
    </li >
  );
}

export default MoviesCard;