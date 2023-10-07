import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchKeyword, setSearchKeyword, isFilter, setFilter }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isWarningVisible, setWarningVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    setWarningVisible(false);
    setIsValid(false);
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      setWarningVisible(true);
      setIsValid(true);
      return;
    }

    setSearchKeyword(searchQuery);
  }

  useEffect(() => {setSearchQuery(searchKeyword)}, [searchKeyword]);

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handleSubmit} noValidate>
        <label className='searchForm__search'>
          <input
            className='searchForm__input'
            type='text'
            name='movietitle'
            placeholder='Фильм'
            value={searchQuery}
            minLength='1'
            required
            onChange={handleChange}
          />
          <button className={`searchForm__button ${isValid ? 'searchForm__button_disable' : ''}`} type='submit' disabled={isValid}>Найти</button>
        </label>
        <FilterCheckbox isFilter={isFilter} setFilter={setFilter} />
      </form>
      <span className='searchForm__error'>{isWarningVisible && 'Нужно ввести ключевое слово'}</span>
    </section>
  );
}

export default SearchForm;