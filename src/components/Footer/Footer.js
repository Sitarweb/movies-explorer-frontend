import React from 'react';

function Footer({}) {
  return (
    <footer className='footer'>
        <h2 className='footer__subtitle'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__info'>
          <p className="footer__year">&copy; {new Date().getFullYear()}</p>
          <nav className="footer__links">
            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com/Sitarweb" target="_blank" rel="noreferrer">Github</a>
          </nav>
        </div>
    </footer>
  );
}

export default Footer;