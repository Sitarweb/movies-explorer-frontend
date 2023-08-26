import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import loggedIn from '../../../images/loggedIn.svg'

function LoggedIn({}) {

    const { pathname } = useLocation();

    return (
        <nav className='loggedIn'>
            <Link className='loggedIn__movies' to='/movies'>Фильмы</Link>
            <Link className='loggedIn__movies' to='/saved-movies'>Сохранённые фильмы</Link>
            <Link className='loggedIn__account' to='/profile'>
                Аккаунт
                <img src={loggedIn} alt='Aккаунт' className={`loggedIn__img ${pathname === '/' ? '' : 'loggedIn__img-main'}`} />
            </Link>
        </nav>
    );
  }
  
  export default LoggedIn;