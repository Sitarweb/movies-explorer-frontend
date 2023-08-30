import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesData from '../../constants/moviesData'

function Movies({}) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList moviesData={moviesData} />
    </main>
  );
}

export default Movies;