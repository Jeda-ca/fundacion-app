// src/components/NavBar.tsx
import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks, programasDropdown } from "../data/data"
import { getActiveClass } from "../utils/getActiveClass"
import logo from "../assets/LogoMejoradoSinFondo.png"

export default function NavBar() {
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

  // Abrir login en nueva pestaña
  const handleAdminAccess = () => {
    // Abre /login en nueva pestaña
    window.open('/login', '_blank', 'noopener,noreferrer')
  }

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
    <nav className="bg-[#E297C2] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Fundación Atma Namasté"
              className="size-26 object-contain"
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
                  {/* Botón de programas */}
                    {nav.path === "/programas" ? (
                    <div 
                      ref={programasRef} 
                      className="relative"
                      onMouseEnter={() => setProgramasOpen(true)}
                      onMouseLeave={() => setProgramasOpen(false)}
                    >
                      {/* Botón que navega al hacer click */}
                      <Link
                        to={nav.path}
                        className={`${getActiveClass(location.pathname, nav.path)} flex items-center`}
                        aria-haspopup="true"
                        aria-expanded={programasOpen ? "true" : "false"}
                      >
                        {nav.name}
                        <svg className="size-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* Dropdown con programas */}
                      <div
                        id="programas-dropdown"
                        role="menu"
                        className={`${programasOpen ? "block" : "hidden"} absolute left-0 top-full w-64 
                                    bg-white border border-pink-300 rounded-lg shadow-xl z-20
                                    pt-2`} // padding-top para continuidad
                      >
                        <ul className="py-2">
                          {programasDropdown.map((x) => (
                            <li key={x.id}>
                              <Link
                                to={`/programas#${x.path.split('/').pop()}`}
                                className="block px-4 py-3 font-[Poppins] text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
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

              {/* Login en mobile - CAMBIAR A NUEVA PESTAÑA */}
              <li className="md:hidden mt-2">
                <button
                  onClick={() => {
                    handleAdminAccess();
                    setMenuOpen(false); // Cierra el menú móvil
                  }}
                  className="block w-full text-left px-4 py-2 rounded-md text-sm text-gray-50 font-[Poppins] bg-orange-400/70 hover:bg-amber-600 transition-colors"
                >
                  Gestión <br />Administrativa
                </button>
              </li> 
            </ul>
          </div>
        </div>

        {/* Botones derecha (desktop) */}
        <div className="flex items-center gap-3">

          {/* Gestión administrativa - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleAdminAccess}
              className="inline-flex items-center px-2 py-1 rounded-md text-md font-[Poppins] text-white bg-[#F38840] hover:bg-amber-600 transition-colors"
            >
              <svg className="size-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Gestión <br /> Administrativa
            </button>
          </div>

          {/* Separador */}
          <div className="hidden md:block h-6 w-px bg-white/70" aria-hidden="true" />

          {/* Selector de lenguaje */}
          <div 
            className="relative" 
            ref={languageRef}
            onMouseEnter={() => setLanguageOpen(true)}
            onMouseLeave={() => setLanguageOpen(false)}
          >
            <button
              aria-expanded={languageOpen ? "true" : "false"}
              aria-controls="language-dropdown"
              className="inline-flex items-center px-3 py-2 rounded-md font-[Poppins] text-white hover:bg-pink-400/70 focus:outline-none"
            >
              <span className="sr-only">Abrir selector de idioma</span>
              
              {/* Bandera del idioma actual */}
              <span className="inline-flex h-5 w-5 rounded-full overflow-hidden ring-1 ring-white/60 mr-2">
                {language === 'es' ? (
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <rect width="24" height="24" fill="#FCD116" />
                    <rect y="12" width="24" height="6" fill="#003893" />
                    <rect y="18" width="24" height="6" fill="#CE1126" />
                  </svg>
                ) : language === 'en' ? (
                  <svg
                    aria-hidden="true"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us"
                    viewBox="0 0 973 512"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <g fill-rule="evenodd">
                      <g stroke-width="1pt">
                        <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                        <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                      </g>
                      <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                      <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" />
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <rect width="8" height="24" x="0" fill="#009246"/>
                    <rect width="8" height="24" x="8" fill="#fff"/>
                    <rect width="8" height="24" x="16" fill="#ce2b37"/>
                  </svg>
                )}
              </span>
              
              {/* Código del idioma actual */}
              <span className="hidden md:inline uppercase font-semibold">
                {language === 'es' ? 'ES' : language === 'en' ? 'EN' : 'IT'}
              </span>
            </button>

            {/* Dropdown */}
            <div
            id="language-dropdown"
            role="menu"
            aria-labelledby="language-button"
            className={`${languageOpen ? "block" : "hidden"} absolute right-0 top-full w-48 bg-white border border-pink-300 rounded-lg shadow-xl z-20 pt-2`}
            >
              <ul className="py-2 font-[Poppins]" role="menu" aria-label="Seleccionar idioma">
                {/* Español */}
                <li>
                  <button
                    onClick={() => { setLanguage('es'); setLanguageOpen(false) }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
                  >
                    <span className="inline-flex h-6 w-6 rounded-full overflow-hidden ring-1 ring-pink-300">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect width="24" height="24" fill="#FCD116" />
                        <rect y="12" width="24" height="6" fill="#003893" />
                        <rect y="18" width="24" height="6" fill="#CE1126" />
                      </svg>
                    </span>
                    <span>Español</span>
                  </button>
                </li>

                {/* English */}
                <li>
                  <button
                    onClick={() => { setLanguage('en'); setLanguageOpen(false) }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
                  >
                    <span className="inline-flex h-6 w-6 rounded-full overflow-hidden ring-1 ring-pink-300">
                      <svg
                        aria-hidden="true"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 973 512"
                        preserveAspectRatio="xMidYMid slice"
                      >
                        <g fill-rule="evenodd">
                          <g stroke-width="1pt">
                            <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                            <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                          </g>
                          <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                          <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" />
                        </g>
                      </svg>
                    </span>
                    <span>English</span>
                  </button>
                </li>

                {/* Italiano */}
                <li>
                  <button
                    onClick={() => { setLanguage('it'); setLanguageOpen(false) }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
                  >
                    <span className="inline-flex h-6 w-6 rounded-full overflow-hidden ring-1 ring-pink-300">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect width="8" height="24" x="0" fill="#009246"/>
                        <rect width="8" height="24" x="8" fill="#fff"/>
                        <rect width="8" height="24" x="16" fill="#ce2b37"/>
                      </svg>
                    </span>
                    <span>Italiano</span>
                  </button>
                </li>
              </ul>
            </div>
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