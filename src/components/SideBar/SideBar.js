import React from 'react';
import { Link} from 'react-router-dom';
import loggedIn from '../../images/loggedIn.svg'

function SideBar({ isOpen, onClose, onOverlayClick }) {
    return (
        <nav className={`sideBar ${isOpen ? 'sideBar_is-opened' : ''}`} onClick={onOverlayClick}>
            <div className='sideBar__container'>
                <Link className='sideBar__movies' to='/'>Главная</Link>
                <Link className='sideBar__movies' to='/movies'>Фильмы</Link>
                <Link className='sideBar__movies' to='/saved-movies'>Сохранённые фильмы</Link>
                <Link className='sideBar__account' to='/profile'>
                    Аккаунт
                    <img src={loggedIn} alt='Аккаунт' className='sideBar__img' />
                </Link>
                <button className='sideBar__button' type='button' onClick={onClose} />
            </div>
        </nav>
    );
  }
  
  export default SideBar;