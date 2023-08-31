import React from 'react';
import aboutMe from '../../../images/aboutMe.jpg'


function AboutMe({}) {
  return (
    <section className='aboutMe'>
        <h2 className='aboutMe__subtitle'>Студент</h2>
        <div className='aboutMe__biography'>
          <div className='aboutMe__bio'>
            <h2 className='aboutMe__name'>Виталий</h2>
            <h4 className='aboutMe__work'>Фронтенд-разработчик, 18 лет</h4>
            <p className='aboutMe__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href='https://github.com/Sitarweb' target='_blank' rel='noreferrer' className='aboutMe__git'>Github</a>
          </div>
          <img src={aboutMe} alt='Фотография студента' className='aboutMe__photo' />
        </div>
    </section>
  );
}

export default AboutMe;