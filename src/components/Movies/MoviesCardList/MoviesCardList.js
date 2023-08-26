import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({}) {

  const { pathname } = useLocation();

  return (
    <section className={`moviesCardList ${pathname === '/saved-movies' ? 'moviesCardList-saved' : ''}`}>
      <ul className='moviesCardList__ul'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className={`moviesCardList__button ${pathname === '/saved-movies' ? 'moviesCardList__button-saved' : ''}`}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;