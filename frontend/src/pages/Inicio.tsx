// src/pages/Inicio.tsx - Versión con mejores breakpoints responsivos
import React, { useEffect, useState, useRef } from "react"

// Importar todos los datos
import {
    heroData,
    estadisticas,
    queHacemosData,
    queHacemosLista,
    compromisoSocialData,
    compromisoSocialItems,
    programasData,
    programas,
    espiritualidadData,
    practicasEspirituales,
    serviciosData,
    servicios,
    footerData,
    navegacionLinks,
    contactoInfo,
    redesSociales,
    politicasLinks
} from '../data/inicioData'

interface ColorClasses {
    [key: string]: string;
}

export default function Inicio() {
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
            { threshold }
            )
    
            if (ref.current) {
            observer.observe(ref.current)
            }
    
            return () => observer.disconnect()
        }, [threshold])
    
        return [ref, isInView]
        }

    const [heroRef, heroInView] = useInView(0.1)
    const [queHacemosRef, queHacemosInView] = useInView(0.2)
    const [compromisoRef, compromisoInView] = useInView(0.2)
    const [programasRef, programasInView] = useInView(0.2)
    const [espiritualidadRef, espiritualidadInView] = useInView(0.2)
    const [serviciosRef, serviciosInView] = useInView(0.2)

    // Función para renderizar iconos
    const renderIcon = (tipo: string) => {
        const iconos = {
        ubicacion: (
            <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </>
        ),
        email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
        telefono: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        }
        return iconos[tipo as keyof typeof iconos] || null
    }

    return (
        <main className="bg-stone-50 overflow-hidden">
        {/* HERO SECTION - Mejorado para mobile */}
        <section 
            ref={heroRef}
            className={`relative min-h-screen flex items-center bg-gradient-to-br from-pink-25 via-stone-50 to-orange-25 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Elementos decorativos sofisticados */}
            <div className="absolute inset-0 pointer-events-none">
            {/* Mesh gradient de fondo */}
            <div 
                className="absolute inset-0 opacity-30"
                style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(219, 39, 119, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)`
                }}
            />
            
            {/* Patrones geométricos sutiles - Responsive */}
            <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-pink-100/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
                <div className="absolute inset-4 md:inset-8 border border-pink-200/30 rounded-full" />
                <div className="absolute inset-8 md:inset-16 border border-pink-200/20 rounded-full animate-spin" style={{animationDuration: '20s'}} />
            </div>
            
            <div className="absolute bottom-1/3 left-1/4 w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72">
                <div className="absolute inset-0 bg-orange-100/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}} />
            </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
                
                {/* Contenido textual - Mejorado mobile */}
                <div className={`lg:col-span-7 space-y-6 lg:space-y-8 transition-all duration-1000 delay-300 ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="space-y-4 lg:space-y-6">
                    {/* Badge inicial elegante */}
                    <div className="inline-flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-pink-100/50 shadow-sm">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                    <span className="text-xs lg:text-sm font-medium text-gray-700">{heroData.badge}</span>
                    </div>

                    <div className="space-y-3 lg:space-y-4">
                    {/* Título - Responsivo */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                        <span className="block">{heroData.titulo.linea1}</span>
                        <span className="block text-pink-600">{heroData.titulo.linea2}</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-sky-600 font-light tracking-wide">
                        {heroData.subtitulo}
                    </p>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light max-w-2xl">
                    {heroData.descripcion}
                    </p>
                </div>

                {/* Botones - Responsive */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
                    <a 
                    href={heroData.botones.primario.url}
                    className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-pink-600 text-white font-semibold rounded-xl lg:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                    <span className="relative flex items-center justify-center gap-2">
                        {heroData.botones.primario.texto}
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                    </a>
                    
                    <a 
                    href={heroData.botones.secundario.url}
                    className="group px-6 lg:px-8 py-3 lg:py-4 text-pink-600 font-semibold rounded-xl lg:rounded-2xl border-2 border-pink-600 hover:bg-pink-50 transition-all duration-300 text-center relative overflow-hidden"
                    >
                    <span className="relative z-10">{heroData.botones.secundario.texto}</span>
                    <div className="absolute inset-0 bg-pink-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                </div>

                {/* Estadísticas - Grid responsivo */}
                <div className="pt-8 lg:pt-12 grid grid-cols-3 gap-4 lg:gap-8">
                    {estadisticas.map((stat, index) => (
                    <div key={index} className="group text-center">
                        <div className="relative">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 group-hover:scale-110 transition-transform duration-300">
                            {stat.number}
                        </div>
                        <div className="text-gray-900 font-medium text-xs sm:text-sm lg:text-base mb-1">{stat.label}</div>
                        <div className="text-gray-500 text-xs">{stat.sublabel}</div>
                        {/* Línea decorativa */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 lg:w-8 h-0.5 bg-pink-200 group-hover:w-8 lg:group-hover:w-12 group-hover:bg-pink-400 transition-all duration-300" />
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Imagen - Mobile friendly */}
                <div className={`lg:col-span-5 transition-all duration-1000 delay-500 ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <div className="relative mt-8 lg:mt-0">
                    <div className="relative aspect-[4/5] max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                    {/* Elementos de fondo múltiples */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-orange-100 rounded-2xl lg:rounded-[2.5rem] transform rotate-3 blur-sm" />
                    <div className="absolute inset-1 lg:inset-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl lg:rounded-[2.5rem] transform -rotate-2 opacity-60" />
                    
                    {/* Marco principal */}
                    <div className="relative bg-white rounded-2xl lg:rounded-[2.5rem] shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-all duration-700 group">
                        <div className="aspect-[4/5] bg-gradient-to-br from-pink-50 to-orange-50 relative overflow-hidden">
                        {/* Pattern sutil de fondo */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 39, 119, 0.15) 1px, transparent 0)`
                            }} />
                        </div>
                        
                        {/* Contenido de placeholder mejorado */}
                        <div className="relative z-10 flex items-center justify-center h-full">
                            <div className="text-center text-gray-400">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <p className="text-base lg:text-lg font-semibold text-gray-600 mb-2">Imagen representativa</p>
                            <p className="text-sm text-gray-400">de la fundación</p>
                            </div>
                        </div>
                        
                        {/* Overlay sutil */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
                        </div>
                    </div>
                    
                    {/* Elementos decorativos flotantes - Responsive */}
                    <div className="absolute -bottom-4 lg:-bottom-8 -left-4 lg:-left-8 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-2xl" />
                    <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-xl" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* QUÉ HACEMOS - Responsive */}
        <section 
            ref={queHacemosRef}
            className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-1000 ${queHacemosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                
                {/* Imagen */}
                <div className={`lg:col-span-2 order-2 lg:order-1 transition-all duration-1000 delay-200 ${queHacemosInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="aspect-[4/3] bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg max-w-sm mx-auto lg:max-w-none">
                    <div className="w-full h-full flex items-center justify-center p-6 lg:p-8 bg-gradient-to-br from-pink-25 to-orange-25">
                    <div className="text-center text-gray-400">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-pink-100 rounded-xl lg:rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        </div>
                        <p className="font-medium text-gray-600 text-sm lg:text-base">Imagen educativa</p>
                        <p className="text-xs lg:text-sm text-gray-400">Programas en acción</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Contenido */}
                <div className={`lg:col-span-3 order-1 lg:order-2 transition-all duration-1000 delay-400 ${queHacemosInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="max-w-2xl">
                    <div className="space-y-6 lg:space-y-8">
                    <div className="space-y-4 lg:space-y-6">
                        {/* Solo línea, sin círculos */}
                        <div className="flex items-center gap-3 lg:gap-4">
                        <div className="w-12 lg:w-16 h-0.5 bg-pink-600" />
                        <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-pink-600">{queHacemosData.etiqueta}</span>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Impulsamos el desarrollo{" "}
                        <em className="text-pink-600 not-italic">integral</em>{" "}
                        de comunidades
                        </h2>
                        
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                        {queHacemosData.descripcion}
                        </p>
                    </div>

                    {/* Lista moderna */}
                    <div className="space-y-2 lg:space-y-3">
                        {queHacemosLista.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-pink-600 rounded-full flex-shrink-0" />
                            <span className="text-gray-700 text-sm lg:text-base">{item.texto}</span>
                        </div>
                        ))}
                    </div>

                    <div className="pt-3 lg:pt-4">
                        <a 
                        href="/quienes-somos" 
                        className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all duration-300 text-sm lg:text-base"
                        >
                        Conoce más sobre nosotros
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* COMPROMISO SOCIAL - Responsive */}
        <section 
            ref={compromisoRef}
            className={`py-16 lg:py-24 bg-white/80 backdrop-blur-sm transition-all duration-1000 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-20 transition-all duration-1000 delay-200 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="w-12 lg:w-16 h-0.5 bg-pink-600" />
                <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-pink-600">{compromisoSocialData.etiqueta}</span>
                <div className="w-12 lg:w-16 h-0.5 bg-pink-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mt-4 mb-6 lg:mb-8">
                {compromisoSocialData.titulo}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {compromisoSocialData.descripcion}
                </p>
            </div>

            {/* Grid moderno */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {compromisoSocialItems.map((item, i) => (
                <div 
                    key={i} 
                    className={`group transition-all duration-1000 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{transitionDelay: `${(i + 1) * 200 + 400}ms`}}
                >
                    <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center gap-3 lg:gap-4">
                        <div className={`w-3 h-3 ${item.accent} rounded-full`} />
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* PROGRAMAS - Responsive con enlaces funcionales */}
        <section 
            ref={programasRef}
            className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-1000 ${programasInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-20 transition-all duration-1000 delay-200 ${programasInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="w-12 lg:w-16 h-0.5 bg-pink-600" />
                <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-pink-600">{programasData.etiqueta}</span>
                <div className="w-12 lg:w-16 h-0.5 bg-pink-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mt-4 mb-6 lg:mb-8">
                {programasData.titulo}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {programasData.descripcion}
                </p>
            </div>

            {/* Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {programas.map((programa, i) => (
                <div 
                    key={i} 
                    className={`group transition-all duration-1000 ${programasInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{transitionDelay: `${(i + 1) * 100 + 400}ms`}}
                >
                    <div className={`bg-white p-6 lg:p-8 rounded-xl lg:rounded-2xl border-2 ${programa.color} transition-all duration-300 hover:shadow-lg h-full`}>
                    <div className="space-y-3 lg:space-y-4">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900">{programa.name}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{programa.desc}</p>
                        
                        <div className="pt-2">
                        <a 
                            href={programa.url}
                            className="inline-flex items-center gap-2 text-pink-600 font-medium group-hover:gap-3 transition-all duration-300 text-sm lg:text-base"
                        >
                            <span>Ver detalles</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            <div className={`text-center mt-8 lg:mt-12 transition-all duration-1000 delay-1000 ${programasInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <a href="/programas" className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors duration-300">
                Ver todos los programas
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>
            </div>
            </div>
        </section>

        {/* ESPIRITUALIDAD - Responsive */}
        <section 
            ref={espiritualidadRef}
            className={`py-16 lg:py-24 bg-gradient-to-br from-purple-50/50 via-stone-50/80 to-pink-50/50 transition-all duration-1000 ${espiritualidadInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Imagen primero en desktop */}
                <div className={`lg:order-2 transition-all duration-1000 delay-200 ${espiritualidadInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="relative">
                    <div className="aspect-square max-w-sm sm:max-w-md lg:max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl lg:rounded-[3rem] transform rotate-3" />
                    <div className="relative bg-white rounded-2xl lg:rounded-[3rem] shadow-xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                        <div className="aspect-square flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-3 lg:mb-4 bg-purple-100 rounded-2xl lg:rounded-3xl flex items-center justify-center">
                            <svg className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            </div>
                            <p className="font-medium text-sm lg:text-base">Imagen espiritual</p>
                            <p className="text-xs lg:text-sm">Meditación y sanación</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Elementos decorativos - Responsive */}
                    <div className="absolute -z-10 -top-4 lg:-top-8 -left-4 lg:-left-8 w-20 h-20 lg:w-32 lg:h-32 bg-purple-100 rounded-full blur-2xl opacity-60" />
                    <div className="absolute -z-10 -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 w-16 h-16 lg:w-24 lg:h-24 bg-pink-100 rounded-full blur-xl opacity-40" />
                </div>
                </div>

                {/* Contenido */}
                <div className={`lg:order-1 space-y-6 lg:space-y-8 transition-all duration-1000 delay-400 ${espiritualidadInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-12 lg:w-16 h-0.5 bg-purple-600" />
                    <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-purple-600">{espiritualidadData.etiqueta}</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Inspirados en las enseñanzas de{" "}
                    <span className="text-purple-600">G.M.C.K.S</span>
                    </h2>
                    
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {espiritualidadData.descripcion}
                    </p>
                </div>

                {/* Elementos fluidos */}
                <div className="space-y-4 lg:space-y-6">
                    {practicasEspirituales.map((practice, i) => (
                    <div key={i} className="flex items-start gap-3 lg:gap-4">
                        <div className="w-7 h-7 lg:w-8 lg:h-8 bg-purple-100 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-purple-600 rounded-full" />
                        </div>
                        <div>
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900">{practice.title}</h3>
                        <p className="text-gray-600 text-sm lg:text-base">{practice.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* SERVICIOS - Responsive compacto */}
        <section 
            ref={serviciosRef}
            className={`py-12 lg:py-16 bg-white/80 backdrop-blur-sm transition-all duration-1000 ${serviciosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                
                {/* Imagen lateral */}
                <div className={`lg:col-span-2 order-2 lg:order-1 transition-all duration-1000 delay-200 ${serviciosInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="aspect-[4/3] bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto lg:max-w-none">
                    <div className="w-full h-full flex items-center justify-center p-4 lg:p-6 bg-gradient-to-br from-orange-25 to-orange-50">
                    <div className="text-center text-gray-400">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-orange-100 rounded-xl lg:rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </div>
                        <p className="font-medium text-gray-600 mb-1 text-sm lg:text-base">Servicios Comunitarios</p>
                        <p className="text-xs text-gray-400">Profesionales al servicio</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Contenido */}
                <div className={`lg:col-span-3 order-1 lg:order-2 transition-all duration-1000 delay-400 ${serviciosInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="max-w-2xl">
                    <div className="space-y-4 lg:space-y-6">
                    <div className="space-y-3 lg:space-y-4">
                        <div className="flex items-center gap-3 lg:gap-4">
                        <div className="w-8 lg:w-12 h-0.5 bg-orange-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-600">{serviciosData.etiqueta}</span>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Profesionales al servicio de la{" "}
                        <em className="text-orange-600 not-italic">comunidad</em>
                        </h2>
                        
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        {serviciosData.descripcion}
                        </p>
                    </div>

                    {/* Lista compacta */}
                    <div className="space-y-1 lg:space-y-2">
                        {servicios.map((service, i) => (
                        <div key={i} className="flex items-center gap-3 py-1 lg:py-2">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0" />
                            <span className="text-gray-700 font-medium text-sm lg:text-base">{service.name}</span>
                        </div>
                        ))}
                    </div>

                    {/* Botón */}
                    <div className="pt-3 lg:pt-4">
                        <a 
                        href="/servicios" 
                        className="inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-orange-600 text-white font-semibold rounded-lg lg:rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg text-sm lg:text-base"
                        >
                        Conocer más
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* FOOTER - Completamente responsive */}
        <footer className="bg-gray-900 text-white">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            {/* Footer principal */}
            <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                
                {/* Información principal */}
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

                {/* Navegación */}
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

                {/* Contacto */}
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

            {/* Footer bottom */}
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
