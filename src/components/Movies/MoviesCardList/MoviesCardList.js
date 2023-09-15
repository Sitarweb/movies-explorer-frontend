import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesData, savedMovies, onSaveMovie, onDeleteMovie, amountToShow, onClick }) {

  const { pathname } = useLocation();

  return (
    <section className={`moviesCardList ${pathname === '/saved-movies' ? 'moviesCardList-saved' : ''}`}>
      <ul className='moviesCardList__ul'>
        {
          moviesData?.slice(0, amountToShow).map((movieData) => {
            return (
              <MoviesCard
                key={movieData.id ? movieData.id : movieData._id}
                movieData={movieData}
                savedMovies={savedMovies}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />
            )
          })
        }
      </ul>
      <button className={`moviesCardList__button ${pathname === '/saved-movies' ? 'moviesCardList__button-saved' : ''}`} type='button' onClick={onClick}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;