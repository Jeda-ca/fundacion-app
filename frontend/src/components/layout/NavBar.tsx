import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks, programasDropdown } from "../../data/navData"
import { getActiveClass } from "../../utils/getActiveClass"
import logo from '../../assets/atmav2SinFondo.png'

export default function NavBar() {
  const location = useLocation()
  
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
  const mobilePanelRef = useRef<HTMLElement | null>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  // Abrir login en nueva pestaña
  const handleAdminAccess = () => {
    window.open('/login', '_blank', 'noopener,noreferrer')
  }

  // Cerrar dropdowns al hacer click fuera (mejorado con pointerdown)
  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      const target = e.target as Node | null
      if (programasRef.current && !programasRef.current.contains(target)) {
        setProgramasOpen(false)
      }
      if (languageRef.current && !languageRef.current.contains(target)) {
        setLanguageOpen(false)
      }
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [])

  // Actualiza <html lang="...">
  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('app_lang', language)
  }, [language])

  // Cerrar menu al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false)
    setProgramasOpen(false)
    setLanguageOpen(false)
  }, [location.pathname])

  // Scroll suave a secciones con hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#','')
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 90
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [location])

  // Body scroll lock y focus trap para mobile panel
  useEffect(() => {
    if (menuOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null
      document.body.style.overflow = "hidden"
      
      // Focus primer elemento focuseable en panel móvil
      setTimeout(() => {
        if (mobilePanelRef.current) {
          const first = mobilePanelRef.current.querySelector<HTMLElement>(
            'a, button, input, [tabindex]:not([tabindex="-1"])'
          )
          first?.focus()
        }
      }, 50)
    } else {
      document.body.style.overflow = ""
      // Restaurar focus
      previouslyFocusedRef.current?.focus?.()
    }
    
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  // Cerrar panel móvil con Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false)
        setProgramasOpen(false)
        setLanguageOpen(false)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      {/* NAVBAR PRINCIPAL - Con tus estilos originales */}
      <nav className="bg-[#E297C2] shadow-sm relative z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo - Tus estilos */}
          <div className="flex items-center gap-3 py-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Fundación Atma Namasté"
                className="size-30 object-contain"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* DESKTOP Navigation - Tus estilos exactos */}
          <div
            id="primary-navigation"
            className="hidden md:block"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <ul className="flex flex-row md:items-center md:gap-6 md:py-0">
                {navLinks.map((nav) => (
                  <li key={nav.id} className="md:inline-block">
                    {nav.path === "/programas" ? (
                      <div 
                        ref={programasRef} 
                        className="relative"
                        onMouseEnter={() => setProgramasOpen(true)}
                        onMouseLeave={() => setProgramasOpen(false)}
                      >
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

                        {/* Dropdown con programas - Tus estilos */}
                        <div
                          id="programas-dropdown"
                          role="menu"
                          className={`${programasOpen ? "block" : "hidden"} absolute left-0 top-full w-64 bg-white border border-pink-300 rounded-lg shadow-xl z-20 pt-2`}
                        >
                          <ul className="py-2">
                            {programasDropdown.map((x) => (
                              <li key={x.id}>
                                <Link
                                  to={x.path}
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
              </ul>
            </div>
          </div>

          {/* Botones derecha - DESKTOP INTACTO */}
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

            {/* Selector de lenguaje - SOLO DESKTOP */}
            <div 
              className="hidden md:block relative" 
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
                
                {/* Bandera del idioma actual - Tus SVG originales */}
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
                      viewBox="0 0 973 512"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                          <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                        </g>
                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                        <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" />
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
                <span className="uppercase font-semibold">
                  {language === 'es' ? 'ES' : language === 'en' ? 'EN' : 'IT'}
                </span>
              </button>

              {/* Dropdown - Tus estilos exactos */}
              <div
                id="language-dropdown"
                role="menu"
                className={`${languageOpen ? "block" : "hidden"} absolute right-0 top-full w-48 bg-white border border-pink-300 rounded-lg shadow-xl z-20 pt-2`}
              >
                <ul className="py-2 font-[Poppins]">
                  {[
                    { code: 'es', name: 'Español', flag: (
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect width="24" height="24" fill="#FCD116" />
                        <rect y="12" width="24" height="6" fill="#003893" />
                        <rect y="18" width="24" height="6" fill="#CE1126" />
                      </svg>
                    )},
                    { code: 'en', name: 'English', flag: (
                      <svg
                        aria-hidden="true"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 973 512"
                        preserveAspectRatio="xMidYMid slice"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                            <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                          </g>
                          <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                          <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7-.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7-.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7-.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7-.9 2.7-2.4-1.7L6 66.2l-.9-2.7-2.4-1.7h3zm16.4 0l-.9 2.8h2.9l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7-.9-2.7-2.4-1.7h2.9zm16.5 0l-.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7-.9-2.7-2.4-1.7h3zm16.5 0l-.9 2.8h2.9l-2.3 1.7-.9 2.7-2.4-1.7-2.3 1.7-.9-2.7-2.4-1.7h2.9zm16.5 0l-.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" />
                        </g>
                      </svg>
                    )},
                    { code: 'it', name: 'Italiano', flag: (
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect width="8" height="24" x="0" fill="#009246"/>
                        <rect width="8" height="24" x="8" fill="#fff"/>
                        <rect width="8" height="24" x="16" fill="#ce2b37"/>
                      </svg>
                    )}
                  ].map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => { setLanguage(lang.code); setLanguageOpen(false) }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
                      >
                        <span className="inline-flex h-6 w-6 rounded-full overflow-hidden ring-1 ring-pink-300">
                          {lang.flag}
                        </span>
                        <span>{lang.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botón hamburguesa (mobile) - SOLO HAMBURGUESA */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(s => !s)}
                aria-expanded={menuOpen ? "true" : "false"}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                className="inline-flex items-center p-2 rounded-md text-gray-50 hover:bg-pink-400/45 focus:outline-none transition-colors duration-200"
              >
                {menuOpen ? (
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* OFF-CANVAS MOBILE PANEL - Ajustado */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className="fixed inset-0 z-50 pointer-events-none"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onPointerDown={() => setMenuOpen(false)}
        />

        {/* Panel lateral derecho - LOGO CENTRADO Y MÁS GRANDE */}
        <aside
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-label"
          className={`fixed right-0 top-0 h-full w-[85vw] max-w-sm bg-[#E297C2]/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="px-6 py-6 h-full flex flex-col">
            
            {/* Header del panel */}
            <div className="flex items-center justify-between mb-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                src={logo} 
                alt="Fundación Atma Namasté" 
                width={58}
                height={58}
                className="object-contain"
                />
                <span id="mobile-menu-label" className="sr-only">Menú principal</span>
              </div>
              
              {/* Botón cerrar en esquina */}
              <button 
                onClick={() => setMenuOpen(false)} 
                aria-label="Cerrar menú" 
                className="p-2 rounded-md text-white hover:bg-pink-400/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navegación principal */}
            <nav className="flex-1 overflow-auto" aria-label="Navegación móvil">
              <ul className="space-y-2">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      to={nav.path}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-4 text-white font-[Poppins] text-lg hover:bg-pink-400/30 rounded-lg transition-colors duration-200"
                    >
                      {nav.name}
                    </Link>

                    {/* Sublinks de Programas - Expandidos siempre en móvil */}
                    {nav.path === "/programas" && (
                      <div className="mt-2 ml-4 space-y-1 border-l-2 border-white/20 pl-4">
                        {programasDropdown.map((programa) => (
                          <Link
                            key={programa.id}
                            to={programa.path}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 px-3 text-white/90 font-[Poppins] text-sm hover:bg-pink-400/20 hover:text-white rounded-md transition-colors duration-200"
                          >
                            {programa.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Gestión Administrativa en móvil */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <button
                  onClick={() => {
                    handleAdminAccess()
                    setMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#F38840]/90 backdrop-blur-sm text-white font-semibold font-[Poppins] rounded-xl hover:bg-amber-600 transition-colors duration-200 shadow-lg"
                >
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Gestión Administrativa</span>
                </button>
              </div>
            </nav>

            {/* SELECTOR DE IDIOMA EN MÓVIL - Al final del panel */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-white/80 font-[Poppins] text-sm mb-4 text-center">Cambiar idioma</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { code: 'es', name: 'Español', short: 'ES', flag: (
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <rect width="24" height="24" fill="#FCD116" />
                      <rect y="12" width="24" height="6" fill="#003893" />
                      <rect y="18" width="24" height="6" fill="#CE1126" />
                    </svg>
                  )},
                  { code: 'en', name: 'English', short: 'EN', flag: (
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 973 512"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                          <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" />
                        </g>
                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                        <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" />
                      </g></svg>
                  )},
                  { code: 'it', name: 'Italiano', short: 'IT', flag: (
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <rect width="8" height="24" x="0" fill="#009246"/>
                      <rect width="8" height="24" x="8" fill="#fff"/>
                      <rect width="8" height="24" x="16" fill="#ce2b37"/>
                    </svg>
                  )}
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setMenuOpen(false)
                    }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-colors duration-200 ${
                      language === lang.code 
                        ? 'bg-white/20 text-white ring-1 ring-white/30' 
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="inline-flex h-7 w-7 rounded-full overflow-hidden ring-1 ring-white/30">
                      {lang.flag}
                    </span>
                    <span className="text-xs font-semibold font-[Poppins]">{lang.short}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}