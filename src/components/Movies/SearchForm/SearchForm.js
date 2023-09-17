import { useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from "../../../utils/Validation";

function SearchForm({ setSearchKeyword, setFilter }) {

  const {inputValue, errors, isValid, handleChange, resetValidation} = useValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    setSearchKeyword(inputValue.movietitle);
  }

  useEffect(() => {resetValidation()}, [resetValidation]);

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handleSubmit} noValidate>
        <label className='searchForm__search'>
          <input
            className='searchForm__input'
            type='text'
            name='movietitle'
            placeholder='Фильм'
            value={inputValue.movietitle || ''}
            required
            onChange={handleChange}
          />
          <button className={`searchForm__button ${isValid ? '' : 'searchForm__button_disable'}`} type='submit' disabled={!isValid}>Найти</button>
        </label>
        <FilterCheckbox setFilter={setFilter} />
      </form>
      <span className='searchForm__error'>{errors.movietitle || ''}</span>
    </section>
  );
}

export default SearchForm;