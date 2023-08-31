import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import moviesData from '../../constants/moviesData'

function SavedMovies({}) {
  return (
    <main className='savedMovies'>
      <SearchForm />
      <MoviesCardList moviesData={moviesData} />
    </main>
  );
}

export default SavedMovies;