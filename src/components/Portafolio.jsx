import React from 'react'

const Portafolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
            <h2 className='portfolio-title'>Portfolio</h2>
            <div className='portfolio__container'>
                <article className='portfolio-card'>
                    <div >

                        <nav>
                            <a href="https://coffeblog-html-css.netlify.app" target='_blank'><img src="/image/blog.jpg" alt="" /></a>
                        </nav>

                        <h3>Blog</h3>
                        <div className='portfolio-card__container'>
                            <p>Proyecto blog de café maquetado con HTML y CSS con la metodologia BEM</p>
                            <ul className='portfolio-ul'>
                                <li className='portfolio-li'>CSS</li>
                                <li className='portfolio-li'>HTML5</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className='portfolio-card'>
                    <div>
                        <nav>
                            <a href="https://festivalsc.netlify.app" target='_blank'><img src="/image/festival.jpg" alt="" /></a>
                        </nav>

                        <h3>Festival of Music</h3>
                        <div className='portfolio-card__container'>
                            <p>Proyecto de maquetado realizado con HTMl, CSS(SASS) y JavaScript</p>
                            <ul className='portfolio-ul'>
                                <li className='portfolio-li'>CSS</li>
                                <li className='portfolio-li'>HTML5</li>
                                <li className='portfolio-li'>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className='portfolio-card'>
                    <div >
                        <nav>
                            <a href="https://appweather-spr.netlify.app" target='_blank'><img src="/image/weather.jpg" alt="" /></a>
                        </nav>

                        <h3>App Weather</h3>
                        <div className='portfolio-card__container'>
                            <p>Proyecto a Base de React Js, usando API pública de tiempo, que idéntica el lugar donde estés ubicado para poder entregar información (es necesario aceptar la ubicación)</p>

                            <ul className='portfolio-ul'>
                                <li className='portfolio-li'>HTML5</li>
                                <li className='portfolio-li'>CSS</li>
                                <li className='portfolio-li'>React Js</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className='portfolio-card'>
                    <div >
                        <nav>
                            <a href="https://appricknmorty.netlify.app" target='_blank'><img src="/image/rick.jpg" alt="" /></a>
                        </nav>

                        <h3>Wiki Rick n' Morty</h3>
                        <div className='portfolio-card__container'>
                            <p>Proyecto en React con el consumo de API pública de Rick & Morty que te permite conocer personajes según su dimensión</p>

                            <ul className='portfolio-ul'>
                                <li className='portfolio-li'>HTML5</li>
                                <li className='portfolio-li'>CSS</li>
                                <li className='portfolio-li'>React Js</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portafolio