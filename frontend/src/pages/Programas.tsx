// src/pages/Programas.tsx - Página completa con personalidad única
import React, { useEffect, useState, useRef } from "react"

// Importar datos
import {
    programasHero,
    impactoProgramasData,
    programasDetallados,
    compromisosLista
} from '../data/programasData'

// Reutilizar datos del footer
import {
    footerData,
    navegacionLinks,
    contactoInfo,
    redesSociales,
    politicasLinks
} from '../data/inicioData'

export default function Programas() {
    const [scrollY, setScrollY] = useState(0)

    // Parallax sutil
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  // Hook para animaciones de intersección
    const useInView = (threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] => {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true)
            }
            },
            { 
            threshold,
            rootMargin: '100px'
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
        }, [threshold])

        return [ref, isInView]
    }

    const [heroRef, heroInView] = useInView(0.1)
    const [programasRef, programasInView] = useInView(0.05)
    const [testimoniosRef, testimoniosInView] = useInView(0.1)
    const [procesoRef, procesoInView] = useInView(0.1)
    const [horariosRef, horariosInView] = useInView(0.1)

  // Función para renderizar iconos
    const renderIcon = (tipo: string, className = "w-8 h-8") => {
        const iconos = {
        libro: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
        paleta: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4M9 9h10a2 2 0 002-2V5a2 2 0 00-2-2H9v6z" />,
        danza: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
        musica: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />,
        corazon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
        estrella: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
        telefono: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
        clipboard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
        documento: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
        crecimiento: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
        ubicacion: (
            <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </>
        ),
        email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        }
        return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {iconos[tipo as keyof typeof iconos] || iconos.estrella}
        </svg>
        )
    }

    return (
        <main className="bg-stone-50 overflow-hidden">
        {/* HERO SECTION */}
        <section 
            ref={heroRef}
            className={`relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-pink-50 via-stone-50 to-purple-50 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Elementos decorativos */}
            <div className="absolute inset-0 pointer-events-none">
            <div 
                className="absolute inset-0 opacity-30"
                style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)`
                }}
            />
            
            <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-pink-400/50 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
                <div className="absolute inset-8 border border-pink-200/50 rounded-full" />
            </div>
            
            <div className="absolute bottom-1/3 left-1/5 w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-pink-300 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}} />
            </div>
            </div>

            {/* Contenido centrado */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className={`transition-all duration-1000 delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200/50 shadow-sm">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-pink-700">Educación que transforma</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                    <span className="block">{programasHero.titulo.parte1}</span>
                    <span className="block text-pink-600">{programasHero.titulo.parte2}</span>
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-blue-600 font-light tracking-wide max-w-4xl mx-auto">
                    {programasHero.subtitulo}
                </p>

                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
                    {programasHero.descripcion}
                </p>

                {/* Navegación rápida */}
                <div className="flex flex-wrap justify-center gap-3 lg:gap-4 pt-6">
                    {programasDetallados.map((programa, index) => (
                    <a 
                        key={index}
                        href={`#${programa.id}`}
                        className="px-4 py-2 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-700 font-medium rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md text-sm"
                    >
                        {programa.nombre}
                    </a>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* PROGRAMAS DETALLADOS */}
        <section 
        ref={programasRef}
        className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-1000 ${programasInView ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-4'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${programasInView ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}>
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="w-12 lg:w-16 h-0.5 bg-purple-500" />
                <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-purple-600">{impactoProgramasData.etiqueta}</span>
                <div className="w-12 lg:w-16 h-0.5 bg-purple-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mt-4 mb-6 lg:mb-8">
                {impactoProgramasData.titulo}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {impactoProgramasData.descripcion}
                </p>
            </div>

            {/* Programas en layout alternado */}
            <div className="space-y-16 lg:space-y-24">
                {programasDetallados.map((programa, index) => (
                <div 
                    key={index}
                    id={programa.id}
                    className={`transition-all duration-1000 ${programasInView ? 'opacity-100 translate-x-0' : `opacity-85 ${index % 2 === 0 ? 'translate-x-4' : '-translate-x-4'}`}`}
                    style={{transitionDelay: `${(index + 1) * 200 + 400}ms`}}
                >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Imagen/Placeholder */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="aspect-[4/3] bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                        <div className={`w-full h-full flex items-center justify-center p-8 bg-gradient-to-br ${programa.color}`}>
                            <div className="text-center text-white">
                            <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                                {renderIcon(programa.icono, 'w-10 h-10 lg:w-12 lg:h-12 text-white')}
                            </div>
                            <p className="text-xl lg:text-2xl font-semibold mb-2">{programa.nombre}</p>
                            <p className="text-white/80">Programa educativo</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className={`space-y-6 lg:space-y-8 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                        <div className="space-y-4">
                        <div className={`flex items-center gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                            {renderIcon(programa.icono, 'w-6 h-6 lg:w-7 lg:h-7 text-pink-600')}
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{programa.nombre}</h3>
                        </div>
                        
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                            {programa.descripcionLarga}
                        </p>
                        </div>

                        {/* Detalles del programa */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Edad objetivo:</h4>
                            <p className="text-gray-600">{programa.edadTarget}</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Duración:</h4>
                            <p className="text-gray-600">{programa.duracion}</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Modalidad:</h4>
                            <p className="text-gray-600">{programa.modalidad}</p>
                        </div>
                        <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Horario:</h4>
                        <p className="text-gray-600">{programa.horario ? `${programa.horario.dias} • ${programa.horario.horas}` : "A coordinar"}</p>
                        </div>

                        </div>

                        {/* Objetivos principales */}
                        <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Objetivos principales:</h4>
                        <div className="space-y-2">
                            {programa.objetivos.slice(0, 3).map((objetivo, i) => (
                            <div key={i} className={`flex items-start gap-3 ${index % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-700">{objetivo}</span>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    {/* Línea separadora */}
                    {index < programasDetallados.length - 1 && (
                    <div className="mt-16 lg:mt-24 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    )}
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* COMPROMISOS */}
        <section 
            ref={horariosRef}
            className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-1000 ${horariosInView ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-4'}`} >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Nuestros compromisos */}
                <div className={`transition-all duration-1000 delay-400 ${horariosInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="space-y-6 lg:space-y-8">
                    <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-0.5 bg-purple-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Nuestros Compromisos</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Lo que garantizamos
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Cada programa viene respaldado por nuestro compromiso inquebrantable con la excelencia educativa y el desarrollo integral.
                    </p>
                    </div>

                    {/* Lista de compromisos */}
                    <div className="space-y-4">
                    {compromisosLista.map((compromiso, i) => (
                        <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{compromiso}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* FOOTER - Reutilizado */}
        <footer className="bg-gray-900 text-white">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                
                <div className="sm:col-span-2 lg:col-span-2">
                <div className="space-y-4 lg:space-y-6">
                    <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2">{footerData.titulo}</h3>
                    <p className="text-sky-400 font-medium text-sm lg:text-base">{footerData.subtitulo}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed max-w-md text-sm lg:text-base">
                    {footerData.descripcion}
                    </p>
                    <div className="flex items-center gap-3 lg:gap-4">
                    {redesSociales.map((red, index) => (
                        <a 
                        key={index}
                        href={red.url} 
                        target={red.url.startsWith('http') ? "_blank" : "_self"}
                        rel={red.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`w-9 h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-lg flex items-center justify-center ${red.hoverColor} transition-colors duration-300`}
                        >
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill={red.nombre === 'Contacto' ? "none" : "currentColor"} stroke={red.nombre === 'Contacto' ? "currentColor" : "none"} viewBox="0 0 24 24">
                            <path strokeLinecap={red.nombre === 'Contacto' ? "round" : undefined} strokeLinejoin={red.nombre === 'Contacto' ? "round" : undefined} strokeWidth={red.nombre === 'Contacto' ? 2 : undefined} d={red.icono}/>
                        </svg>
                        </a>
                    ))}
                    </div>
                </div>
                </div>

                <div>
                <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Navegación</h4>
                <ul className="space-y-2 lg:space-y-3">
                    {navegacionLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base">
                        {link.texto}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>

                <div>
                <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Contacto</h4>
                <ul className="space-y-2 lg:space-y-3 text-gray-300">
                    {contactoInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {renderIcon(info.icono)}
                        </svg>
                        <span style={{whiteSpace: 'pre-line'}} className="text-sm lg:text-base">{info.texto}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className="py-6 lg:py-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 lg:gap-4">
                <p className="text-gray-400 text-xs lg:text-sm text-center sm:text-left">
                {footerData.copyright}
                </p>
                <div className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm">
                {politicasLinks.map((link, index) => (
                    <a key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.texto}
                    </a>
                ))}
                </div>
            </div>
            </div>
        </footer>
        </main>
    )
}
