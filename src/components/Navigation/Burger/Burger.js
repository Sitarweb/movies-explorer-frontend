import React from 'react';


function Burger({onClick}) {
    return (
        <button 
            className='burger__button'
            type='button' 
            onClick={onClick} 
        />
    );
  }
  
  export default Burger;