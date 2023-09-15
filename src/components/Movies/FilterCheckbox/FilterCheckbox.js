import React from 'react';

function FilterCheckbox({ setFilter }) {

  return (
    <label className='filterCheckbox'>
      <div className='filterCheckbox__group'>
        <input
          type='checkbox'
          className='filterCheckbox__input'
          placeholder=''
          onChange={(event) => setFilter(event.target.checked)}
        />
        <span className='filterCheckbox__span' />
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;