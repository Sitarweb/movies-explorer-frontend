import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EXTERNAL_URL } from '../../../constants/constants';
import duration from '../../../utils/Utils';

function MoviesCard({ movieData, savedMovies, onSaveMovie, onDeleteMovie }) {

  const { pathname } = useLocation();
  const [isLikeImage, setLikeImage] = useState(false);
  const [cardId, setCardId] = useState('');

  function handleClick() {
    const isLike = savedMovies.some((movie) => {
      if (movie.movieId === movieData.id || movie.movieId === movieData.movieId) {
        setCardId(movie._id);
        return true;
      } else {
        return false;
      }
    });
    if (isLike) {
      onDeleteMovie(movieData._id ? movieData._id : cardId);
      setLikeImage(false);
    } else {
      onSaveMovie(movieData);
      setLikeImage(true);
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