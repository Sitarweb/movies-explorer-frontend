import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import loggedIn from '../../../images/loggedIn.svg'

function LoggedIn({}) {

    const { pathname } = useLocation();

    return (
        <nav className='loggedIn'>
            <div className='loggedIn__movies'>
                <Link className='loggedIn__movie' to='/movies'>Фильмы</Link>
                <Link className='loggedIn__movie' to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
            <Link className='loggedIn__account' to='/profile'>
                Аккаунт
                <img src={loggedIn} alt='Aккаунт' className={`loggedIn__img ${pathname === '/' ? '' : 'loggedIn__img-main'}`} />
            </Link>
        </nav>
    );
  }
  
  export default LoggedIn;