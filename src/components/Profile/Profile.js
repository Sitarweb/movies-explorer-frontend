import React from 'react';
import { Link } from 'react-router-dom';


function Profile({}) {
  return (
    <main className='main'>
      <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='name'
              placeholder=''
              minLength={2}
              maxLength={40}
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
              autoComplete='off'
              placeholder=''
              required
            />
          </label>
          <span className='profile__error'></span>
          <button className='profile__button'>Редактировать</button>
          <Link className='profile__link' to='/'>Выйти из аккаунта</Link>
        </form>
      </section>
    </main>
  );
}

export default Profile;
