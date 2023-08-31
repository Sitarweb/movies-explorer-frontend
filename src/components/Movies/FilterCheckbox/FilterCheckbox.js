import React from 'react';

function FilterCheckbox({onChange}) {

  return (
    <label className='filterCheckbox'>
      <div className='filterCheckbox__group'>
        <input
          type='checkbox'
          className='filterCheckbox__input'
          onChange={onChange}
        />
        <span className='filterCheckbox__span' />
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;