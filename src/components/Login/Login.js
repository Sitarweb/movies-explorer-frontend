import React from 'react';
import { Link } from 'react-router-dom';


function Login({}) {
  return (
    <main className='signin'>
      <Link className='signin__link-logo' to='/' />
      <h1 className='signin__title'>Рады видеть!</h1>
      <form className='signin__form'>
        <label className='signin__label'>
          E-mail
          <input
            className='signin__input'
            type='email'
            name='email'
            required
          />
        </label>
        <span className='signin__error'></span>
        <label className='signin__label'>
          Пароль
          <input
            className='signin__input'
            type='password'
            name='password'
            autoComplete='off'
            required
          />
        </label>
        <span className='signin__error'></span>
        <button className='signin__submit-button' type='submit'>
          Войти
        </button>
        <p className='signin__text'>
          Ещё не зарегистрированы?
          <Link className='signin__link' to='/signup'>Регистрация</Link>
        </p>
      </form>
    </main>
  );
}

export default Login;