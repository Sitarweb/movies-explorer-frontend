import React from 'react';


function Portfolio({}) {
  return (
    <section className='portfolio'>
        <h2 className='portfolio__subtitle'>Портфолио</h2>
        <nav className='portfolio__links'>
          <a href='https://sitarweb.github.io/how-to-learn/' className='portfolio__link'>Статичный сайт<p className='portfolio__text'>&#8599;</p></a>
          <a href='https://sitarweb.github.io/russian-travel' className='portfolio__link'>Адаптивный сайт<p className='portfolio__text'>&#8599;</p></a>
          <a href='https://sitarweb.github.io/react-mesto-auth/' className='portfolio__link'>Одностраничное приложение<p className='portfolio__text'>&#8599;</p></a>
        </nav>
    </section>
  );
}

export default Portfolio;