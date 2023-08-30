import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesData }) {

  const { pathname } = useLocation();

  return (
    <section className={`moviesCardList ${pathname === '/saved-movies' ? 'moviesCardList-saved' : ''}`}>
      <ul className='moviesCardList__ul'>
        {
          moviesData?.map((movieData) => {
            return (<MoviesCard movieData={movieData} />)
          })
        }
      </ul>
      <button className={`moviesCardList__button ${pathname === '/saved-movies' ? 'moviesCardList__button-saved' : ''}`} type='button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;