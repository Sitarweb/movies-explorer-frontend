import React from 'react';


function Techs({}) {
  return (
    <section className='techs'>
        <h2 className='techs__subtitle'>Технологии</h2>
        <h1 className='techs__title'>7 технологий</h1>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__progress'>
          <p className='techs__caption'>HTML</p>
          <p className='techs__caption'>CSS</p>
          <p className='techs__caption'>JS</p>
          <p className='techs__caption'>React</p>
          <p className='techs__caption'>Git</p>
          <p className='techs__caption'>Express.js</p>
          <p className='techs__caption'>mongoDB</p>
        </div>
    </section>
  );
}

export default Techs;