import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ setSearchKeyword, setFilter }) {

  const [value, setValue] = useState('');

  function handleSubmit() {
    setSearchKeyword(value);
  }

  return (
    <section className='searchForm'>
      <form className='searchForm__form'>
        <label className='searchForm__search'>
          <input
            className='searchForm__input'
            type='text'
            name='movietitle'
            placeholder='Фильм'
            onChange={(evt) => setValue(evt.target.value)}
            required
          />
          <button className={`searchForm__button`} type='button' onClick={handleSubmit}>Найти</button>
        </label>
        <FilterCheckbox setFilter={setFilter} />
      </form>
    </section>
  );
}

export default SearchForm;