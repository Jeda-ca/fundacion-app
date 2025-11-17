import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/layout'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Programas from './pages/Programas'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import Donaciones from './pages/Donaciones'

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        {/* Rutas del sitio público */}
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/donaciones" element={<Donaciones />} />
      </Routes>
    </>
  )
}

export default App