import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useWindowSize } from '../../utils/Utils';
import { TABLET_WIDTH, MOBILE_WIDTH, DESKTOP_AMOUNT, TABLET_AMOUNT, MOBILE_AMOUNT, SHORTS_DURATION } from '../../constants/constants';

function Movies({ movies, savedMovies, onSaveMovie, onDeleteMovie }) {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [isFilter, setFilter] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [initialRenderMovies, setInitialRenderMovies] = useState({amountToShow: 0, amountToAdd: 0});
  const { width } = useWindowSize();

  useEffect(() => {
    handleSearchMovies();
    setFilteredMovies(handleFilter(searchResults));
  }, [searchKeyword, isFilter]);

  useEffect(() => {
    if( width > TABLET_WIDTH) {
      setInitialRenderMovies(DESKTOP_AMOUNT);
    } else if( width >= MOBILE_WIDTH) {
      setInitialRenderMovies(TABLET_AMOUNT);
    } else {
      setInitialRenderMovies(MOBILE_AMOUNT);
    }
  }, [width]);

  function handleSearchMovies() { // Ищет фильмы
    setSearchResults([]);
    if (searchKeyword.length > 0) {
      const searchResults = handleSearch(movies, searchKeyword);
      if (searchResults.length === 0) {
        console.log('По запросу ничего не найдено');
      } else {
        setSearchResults(searchResults);
      }
    } else {
      setSearchResults(movies);
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

  function handleMoreClick() {
    setInitialRenderMovies({amountToShow: initialRenderMovies.amountToShow + initialRenderMovies.amountToAdd, amountToAdd: initialRenderMovies.amountToAdd});
  }

  return (
    <main className='movies'>
      <SearchForm
        setSearchKeyword={setSearchKeyword}
        setFilter={setFilter}
      />
      <MoviesCardList
        moviesData={isFilter ? filteredMovies : movies}
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        amountToShow={initialRenderMovies.amountToShow}
        onClick={handleMoreClick}
      />
    </main>
  );
}

export default Movies;