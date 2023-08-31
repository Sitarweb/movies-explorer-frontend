import React from 'react';


function Portfolio({}) {
  return (
    <section className='portfolio'>
        <h2 className='portfolio__subtitle'>Портфолио</h2>
        <ul className='portfolio__links'>
          <li className='portfolio__item'>
            <a href='https://sitarweb.github.io/how-to-learn/' target='_blank' rel='noreferrer' className='portfolio__link'>Статичный сайт<p className='portfolio__text'>&#8599;</p></a>
          </li>
          <li className='portfolio__item'>
            <a href='https://sitarweb.github.io/russian-travel' target='_blank' rel='noreferrer' className='portfolio__link'>Адаптивный сайт<p className='portfolio__text'>&#8599;</p></a>
          </li>
          <li className='portfolio__item'>
            <a href='https://sitarweb.github.io/react-mesto-auth/' target='_blank' rel='noreferrer' className='portfolio__link'>Одностраничное приложение<p className='portfolio__text'>&#8599;</p></a>
          </li>
        </ul>
    </section>
  );
}

export default Portfolio;