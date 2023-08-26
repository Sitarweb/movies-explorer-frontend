import React from 'react';
import { Link} from 'react-router-dom';
import loggedIn from '../../../images/loggedIn.svg'

function SideBar({ toggle, onClick }) {
    return (
        <nav className={`sideBar ${toggle ? 'sideBar_is-opened' : ''}`}>
            <Link className='sideBar__movies' to='/'>Главная</Link>
            <Link className='sideBar__movies' to='/movies'>Фильмы</Link>
            <Link className='sideBar__movies' to='/saved-movies'>Сохранённые фильмы</Link>
            <Link className='sideBar__account' to=''>
                Аккаунт
                <img src={loggedIn} alt='Аккаунт' className='sideBar__img' />
            </Link>
            <button className='sideBar__button' type='button' onClick={onClick} />
        </nav>
    );
  }
  
  export default SideBar;