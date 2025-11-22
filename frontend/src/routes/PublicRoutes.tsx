import { Routes, Route } from 'react-router-dom'
import { NavBar, Footer } from '../components/layout'
import Inicio from '../pages/public/Inicio'
import Programas from '../pages/public/Programas'
import QuienesSomos from '../pages/public/QuienesSomos'
import Servicios from '../pages/public/Servicios'
import Contacto from '../pages/public/Contacto'
import Donaciones from '../pages/public/Donaciones'
import NotFound from '../pages/NotFound'  // ← NUEVO

export const PublicRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/donaciones" element={<Donaciones />} />
        
        {/* Página 404 para rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
