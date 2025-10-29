import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import LoginModal from './components/LoginModal'


function App() {
const [count, setCount] = useState(0)
  //Estado y funciones para el LoginModal
  const [showLogin, setShowLogin] = useState(false)
  const handleOpenLogin = () => setShowLogin(true)
  const handleCloseLogin = () => setShowLogin(false)

  return (
    <>
      <NavBar onLoginClick={handleOpenLogin}/>
      <Routes>
        {/* Otras rutas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>

      {showLogin && <LoginModal onClose={handleCloseLogin} />}
    </>
  )
}

export default App
