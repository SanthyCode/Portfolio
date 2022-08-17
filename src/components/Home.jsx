import React from 'react'

const Home = () => {
  return (
    <header id='home' className='home'>
      <div className='home__container'>
        <article>
          <h2 className='home__title'> Front End Developer - React Js </h2>
        </article>
        <article>
          <h2>About me</h2>
          <p>Front End Developer con
            experiencia en la librería de React Js, sus principales actividades son comprender los requicitos del negocio, sugerir, aportar e implementar soluciones para el desarrollo del mismo.
            Apasionado por el aprendizage continuo y autodidacta, demostrando así su compromiso y mejora constante.</p>
        </article>
        <article >
          <ul id='skills' className='home-tech'>
            <li><i className='bx bxl-html5' ></i>HTML</li>
            <li><i className='bx bxl-css3' ></i>CSS</li>
            <li><i className='bx bxl-javascript' ></i>JavaScript</li>
            <li><i className='bx bxl-react' ></i>React</li>
          </ul>
        </article>
      </div>
    </header>
  )
}

export default Home