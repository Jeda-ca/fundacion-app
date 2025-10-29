import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks, programasDropdown } from "../data/data"
import { getActiveClass } from "../utils/getActiveClass"
import logo from "../assets/LogoMejoradoSinFondo.png"

// 1. AÑADIR INTERFAZ DE PROPS
interface NavBarProps {
  onLoginClick: () => void;
}

// 2. USAR LA INTERFAZ DE PROPS
export default function NavBar({ onLoginClick }: NavBarProps) {
  const location = useLocation();
  // Estados
  const [menuOpen, setMenuOpen] = useState(false)
  const [programasOpen, setProgramasOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  // Lee idioma guardado o usa 'es' por defecto
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('app_lang') || 'es'
  })

  // Refs para detectar clicks fuera y cerrar dropdowns
  const programasRef = useRef<HTMLDivElement | null>(null)
  const languageRef = useRef<HTMLDivElement | null>(null)

  // Toggle helpers (limpieza del código)
  const toggleMenu = () => setMenuOpen((s) => !s)
  const toggleProgramas = () => setProgramasOpen((s) => !s)
  const toggleLanguage = () => setLanguageOpen((s) => !s)

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        programasRef.current &&
        !programasRef.current.contains(e.target as Node)
      ) {
        setProgramasOpen(false)
      }
      if (languageRef.current && !languageRef.current.contains(e.target as Node)) {
        setLanguageOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

   // Actualiza <html lang="...">
  useEffect(() => {
  document.documentElement.lang = language
  localStorage.setItem('app_lang', language)
}, [language])

  // Cerrar menu al cambiar de ruta (útil en mobile)
  useEffect(() => {
    setMenuOpen(false)
    setProgramasOpen(false)
    setLanguageOpen(false)
  }, [location.pathname])
  
  return (
    <nav className="bg-pink-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Fundación Atma Namasté"
              className="size-15 object-contain"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Navigation links */}
      <div
        id="primary-navigation"
        className={`${menuOpen ? "block" : "hidden"} md:block border-t md:border-t-0`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ul className="flex flex-col md:flex-row md:items-center md:gap-6 md:py-0 py-4">
            {navLinks.map((nav) => (
              <li key={nav.id} className="md:inline-block">
                {nav.path === "/programas" ? (
                  <div ref={programasRef} className="relative">
                    <button
                      onClick={toggleProgramas}
                      aria-expanded={programasOpen ? "true" : "false"}
                      aria-controls="programas-dropdown"
                      className={`${getActiveClass(location.pathname, nav.path)} flex items-center`}
                    >
                      {nav.name}
                      <svg className="size-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      id="programas-dropdown"
                      role="menu"
                      className={`${programasOpen ? "block" : "hidden"} absolute left-0 mt-2 w-56 bg-pink-300 border rounded-md shadow-lg z-20`}
                    >
                      <ul>
                        {programasDropdown.map((x) => (
                          <li key={x.id}>
                            <Link
                              to={x.path}
                              className="block px-4 py-2 text-gray-700 bg-pink-400/45 hover:bg-pink-400/60"
                            >
                              {x.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link to={nav.path} className={getActiveClass(location.pathname, nav.path)}>
                    {nav.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Login visible en mobile */}
            <li className="md:hidden mt-2">
              {/* CAMBIAR EL <Link> POR <button> */}
              <button
                onClick={() => {
                  onLoginClick();
                  setMenuOpen(false); // También cierra el menú
                }}
                className="block w-full text-left px-4 py-2 rounded-md text-sm text-gray-50 font-medium bg-orange-400/70 hover:bg-amber-600"
              >
                Gestión Administrativa
              </button>
            </li>
          </ul>
        </div>
      </div>

        {/* Botones derecha (desktop) */}
        <div className="flex items-center gap-4">
          {/* Selector de lenguaje */}
          <div className="relative right-0" ref={languageRef}>
            <button
              onClick={toggleLanguage}
              aria-expanded={languageOpen ? "true" : "false"}
              aria-controls="language-dropdown"
              className="inline-flex items-center px-3 py-2 rounded-md text-gray-50 hover:bg-pink-400/45 focus:outline-none"
            >
              <span className="sr-only">Abrir selector de idioma</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m6 4a9 9 0 11-6-8.485" />
              </svg>
              <span className="ml-2 hidden md:inline">ES</span>
            </button>

            <div
              id="language-dropdown"
              role="menu"
              aria-labelledby="language-button"
              className={`${languageOpen ? "block" : "hidden"} absolute right-0 mt-2 w-40 bg-pink-400/45 rounded-md shadow-lg z-20`}
            >
              <ul className="py-1" role="menu" aria-label="Seleccionar idioma">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-pink-400/45">Español</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-pink-400/45">English</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-pink-400/45">Italiano</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Gestión administrativa */}
          <div className="hidden md:block">
            {/* CAMBIAR EL <Link> POR <button> */}
            <button
              onClick={onLoginClick}
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-400/70 hover:bg-amber-500"
            >
              {/* ... (El SVG del usuario que ella tiene) ... */}
              Gestión Administrativa
            </button>
          </div>

          {/* Botón hamburguesa (mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={menuOpen ? "true" : "false"}
              aria-controls="primary-navigation"
              className="inline-flex items-center p-2 rounded-md text-gray-50 hover:bg-pink-400/45 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {menuOpen ? (
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
