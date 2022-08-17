import './App.css'
import Contacto from './components/Contacto'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portafolio from './components/Portafolio'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='App__container'>
      <Home />
      <Portafolio />
      <Contacto />
      </div>
    </div>
  )
}

export default App
