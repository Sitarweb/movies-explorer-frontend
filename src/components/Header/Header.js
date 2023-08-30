import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {

  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname === '/' ? '' : 'header__main'}`}>
      <Link className='header__link-logo' to='/' />
      {
        loggedIn ? (
          <Navigation />
        ) : (
          <nav className='header__infoblock'>
            <Link className='header__signup' to='/signup'>Регистрация</Link>
            <Link className='header__signin' to='/signin'>Войти</Link>
          </nav>
        )
      }
    </header>
  );
}

export default Header;