//import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Inicio from './pages/Inicio'
import { Routes, Route } from 'react-router-dom'
import QuienesSomos from './pages/QuienesSomos'

function App() {
//const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Routes>
        {/* Otras rutas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
    </>
  )
}

export default App
