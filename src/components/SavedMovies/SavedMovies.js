import { useState, useEffect } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { NOTFOUND_ERROR, SHORTS_DURATION } from '../../constants/constants';

function SavedMovies({ savedMovies, onDeleteMovie }) {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [isFilter, setFilter] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    handleSearchMovies();
    setFilteredMovies(handleFilter(searchResults));
  }, [searchKeyword, isFilter]);

  function handleSearchMovies() { // Ищет фильмы
    setSearchResults([]);
    if (searchKeyword.length > 0) {
      const searchResults = handleSearch(savedMovies, searchKeyword);
      if (searchResults.length === 0) {
        console.log(NOTFOUND_ERROR);
      } else {
        setSearchResults(searchResults);
      }
    } else {
      setSearchResults(savedMovies);
    }
  }

  function handleSearch(array, keyword) { // Осуществляет поиск в массиве фильмов (array) по заданному ключевому слову
    return array.filter((movie) => { // Проверяет каждый фильм в исходном массиве на наличие ключевого слова и возврата его
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase().trim()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase().trim());
    });
  }

  function handleFilter(array) { // Осуществляет поиск в массиве фильмов (array) по короткометражкам 
    return array.filter((movie) => {
      return movie.duration <= SHORTS_DURATION;
    });
  }

  return (
    <main className='savedMovies'>
      <SearchForm
        setSearchKeyword={setSearchKeyword}
        setFilter={setFilter}
      />
      <MoviesCardList
        moviesData={isFilter ? filteredMovies : searchResults}
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}

export default SavedMovies;