import { Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/layout'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import LoginPage from './pages/LoginPage'
import Programas from './pages/Programas'
import Servicios from './pages/Servicios'

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
        
        {/* Página de login administrativo */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App