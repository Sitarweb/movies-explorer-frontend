import React from 'react';
import { Link } from 'react-router-dom';


function Register({}) {
  return (
    <main className='main'>
      <section className='signup'>
        <Link className='signup__link-logo' to='/' />
        <h1 className='signup__title'>Добро пожаловать!</h1>
        <form className='signup__form'>
          <label className='signup__label'>
            Имя
            <input
              className='signup__input'
              type='text'
              name='name'
              placeholder=''
              minLength={2}
              maxLength={40}
              required
            />
          </label>
          <span className='signup__error'></span>
          <label className='signup__label'>
            E-mail
            <input
              className='signup__input'
              type='email'
              name='email'
              autoComplete='off'
              placeholder=''
              required
            />
          </label>
          <span className='signup__error'></span>
          <label className='signup__label'>
            Пароль
            <input
              className='signup__input'
              type='password'
              name='password'
              autoComplete='off'
              placeholder=''
              minLength={3}
              maxLength={20}
              required
            />
          </label>
          <span className='signup__error'></span>
          <button className='signup__submit-button' type='submit'>
            Зарегистрироваться
          </button>
          <p className='signup__text'>
            Уже зарегистрированы?
            <Link className='signup__link' to='/signin'>Войти</Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;
