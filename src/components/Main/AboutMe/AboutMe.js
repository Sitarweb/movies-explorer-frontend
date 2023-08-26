import React from 'react';
import aboutMe from '../../../images/aboutMe.jpg'


function AboutMe({}) {
  return (
    <section className='aboutMe'>
        <h2 className='aboutMe__subtitle'>Студент</h2>
        <div className='aboutMe__biography'>
          <div className='aboutMe__bio'>
            <h1 className='aboutMe__name'>Семён</h1>
            <h3 className='aboutMe__work'>Фронтенд-разработчик, 18 лет</h3>
            <p className='aboutMe__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href='https://github.com/Sitarweb' className='aboutMe__git'>Github</a>
          </div>
          <img src={aboutMe} alt='Фото' className='aboutMe__photo' />
        </div>
    </section>
  );
}

export default AboutMe;