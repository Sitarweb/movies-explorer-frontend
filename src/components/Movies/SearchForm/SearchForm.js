import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({}) {

  const [toggle, setToggle] = useState(false);

  return (
    <section className='searchForm'>
      <form className='searchForm__form'>
        <label className='searchForm__search'>
          <input
            className='searchForm__input'
            type='text'
            name='movietitle'
            placeholder='Фильм'
            required
          />
          <button className={`searchForm__button `} type='submit'>Найти</button>
        </label>
        <FilterCheckbox onChange={(event) => setToggle(event.target.checked)} />
      </form>
    </section>
  );
}

export default SearchForm;