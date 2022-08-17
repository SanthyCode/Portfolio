import React from 'react'

const Portafolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
            <h2 className='portfolio-title'>Portfolio</h2>
            <div className='portfolio__container'>
                <article className='portfolio-card'>
                    <div >

                        <nav>
                            <a href="https://coffeblog-html-css.netlify.app" target='_blank'><img src="./../public/blog.jpg" alt="" /></a>
                        </nav>

                        <h3>Blog</h3>
                        <div className='portfolio-card__container'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, adipisci numquam!</p>
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
                            <a href="https://festivalsc.netlify.app" target='_blank'><img src="./../public/festival.jpg" alt="" /></a>
                        </nav>

                        <h3>Festival of Music</h3>
                        <div className='portfolio-card__container'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, adipisci numquam!</p>
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
                            <a href="https://appweather-spr.netlify.app" target='_blank'><img src="./../public/weather.jpg" alt="" /></a>
                        </nav>

                        <h3>App Weather</h3>
                        <div className='portfolio-card__container'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, adipisci numquam!</p>

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
                            <a href="https://appricknmorty.netlify.app" target='_blank'><img src="./../public/rick.jpg" alt="" /></a>
                        </nav>

                        <h3>Wiki Rick n' Morty</h3>
                        <div className='portfolio-card__container'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, adipisci numquam!</p>

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