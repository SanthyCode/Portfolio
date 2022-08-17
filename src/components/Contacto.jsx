import React from 'react'

const Contacto = () => {
    return (
        <div id='contact' className='contact'>
            <h2>Contacto</h2>
            <section className='contact-info'>
                <div>
                <h3 >Linkedin</h3>
                <a href="https://www.linkedin.com/in/santiago-pulido-r/" target='_blank'><i className='bx bxl-linkedin-square'></i></a>
                </div>
                <div>
                <h3>E-Mail</h3>
                <a href='mailto:santy.pulido28@gmail.com?'><i className='bx bx-envelope'></i></a>
                </div>
                <div>
                <h3>Whatsapp</h3>
                <a href="https://api.whatsapp.com/send?phone=573155974692&text=Hola, me encantaría contactarte" target='_blank'><i className='bx bxl-whatsapp'></i></a>
                </div>
            </section>
            <footer><h3 className='footer'>Todos los derechos reservados 2022</h3></footer>
        </div>
    )
}

export default Contacto