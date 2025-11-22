import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/layout'
import Inicio from './pages/public/Inicio'
import QuienesSomos from './pages/public/QuienesSomos'
import Programas from './pages/public/Programas'
import Servicios from './pages/public/Servicios'
import Contacto from './pages/public/Contacto'
import Donaciones from './pages/public/Donaciones'

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