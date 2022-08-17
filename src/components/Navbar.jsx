import React, { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => setMenu(!menu)
  
  return (
    <div className='navbar'>
      <h1 className='title'>Santiago Pulido R</h1>
      <nav className={`navbar-a ${ menu ? 'active' : '' } `}>
        <a className='navbar-a__li' href="#home">Home</a>
        <a className='navbar-a__li' href="#skills">Mis Habilidades</a>
        <a className='navbar-a__li' href="#portfolio">Portfolio</a>
        <a className='navbar-a__li' href="#contact">Contact</a>
      </nav>
        <button onClick={toggleMenu}  className='menu'><i className='bx bx-menu'></i></button>
    </div>
  )
}

export default Navbar