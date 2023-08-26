import React from 'react';
import { Link } from 'react-router-dom';


function Profile({}) {
  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile__form'>
        <label className='profile__label'>
          Имя
          <input
            className='profile__input'
            type='text'
            name='name'
            required
          />
        </label>
        <span className='profile__error'></span>
        <label className='profile__label'>
          E-mail
          <input
            className='profile__input'
            type='email'
            name='email'
            required
          />
        </label>
        <span className='profile__error'></span>
        <p className='profile__text'>Редактировать</p>
        <Link className='profile__link' to='/'>Выйти из аккаунта</Link>
      </form>
    </main>
  );
}

export default Profile;
