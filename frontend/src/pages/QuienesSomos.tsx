import React, { useEffect, useState, useRef } from "react"

// Importar datos
import {
    quienesSomosHero,
    misionData,
    visionData,
    historiaData,
    valoresData,
    valores,
    impactoData,
    estadisticasImpacto,
    compromisoFuturoData,
    compromisosLista
} from '../data/quienesSomosData'

// Reutilizar datos del footer
import {
    footerData,
    navegacionLinks,
    contactoInfo,
    redesSociales,
    politicasLinks
} from '../data/inicioData'

export default function QuienesSomos() {
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
        const ref = useRef<HTMLDivElement>(null)

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
    const [misionVisionRef, misionVisionInView] = useInView(0.2)
    const [historiaRef, historiaInView] = useInView(0.2)
    const [valoresRef, valoresInView] = useInView(0.2)
    const [impactoRef, impactoInView] = useInView(0.2)
    const [compromisoRef, compromisoInView] = useInView(0.2)

    // Función para renderizar iconos
    const renderIcon = (tipo: string, className = "w-8 h-8") => {
        const iconos = {
        mision: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
        vision: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />,
        corazon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
        manos: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />,
        escudo: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
        diversidad: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
        crecimiento: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
        tierra: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        ubicacion: (
            <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </>
        ),
        email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
        telefono: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        }
        return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {iconos[tipo as keyof typeof iconos] || iconos.corazon}
        </svg>
        )
    }

    return (
        <main className="bg-stone-50 overflow-hidden">
              {/* HERO SECTION - Imagen full width con texto superpuesto */}
        <section 
            ref={heroRef}
            className={`relative min-h-screen flex items-end transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Imagen de fondo de extremo a extremo */}
            <div className={`absolute inset-0 transition-all duration-1000 delay-200 ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            {/* Imagen placeholder que ocupa todo el espacio */}
            <div className="w-full h-full bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100 relative overflow-hidden">
                {/* Pattern de fondo */}
                <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 70%, rgba(219, 39, 119, 0.1) 0%, transparent 50%),
                                    radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`
                }}
                />
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}} />
                <div className="absolute inset-4 md:inset-8 border border-purple-300/30 rounded-full" />
                </div>

                <div className="absolute bottom-1/3 right-1/4 w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-pink-200/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '6s'}} />
                </div>
                
                {/* Contenido central de la imagen */}
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500 opacity-80">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-8 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500">
                    {renderIcon('corazon', 'w-12 h-12 lg:w-16 lg:h-16 text-purple-600')}
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                    <p className="text-xl lg:text-2xl font-semibold text-gray-700 mb-2">Nuestra Fundación</p>
                    <p className="text-gray-500">15+ años transformando vidas</p>
                    </div>
                </div>
                </div>

                </div>
            </div>

            {/* Contenido textual superpuesto en la parte inferior */}
            <div className="relative z-10 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 lg:pb-12">
                <div className={`text-center transition-all duration-1000 delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Overlay de contenido - MÁS COMPACTO */}
                <div className="inline-block bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-6 lg:px-8 lg:py-8 shadow-xl max-w-3xl">
                    <div className="space-y-3 lg:space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-purple-700">Fundación Atma Namasté</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                        <span className="block">{quienesSomosHero.titulo}</span>
                    </h1>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-blue-600 font-light tracking-wide">
                        {quienesSomosHero.subtitulo}
                    </p>

                    <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed font-light max-w-2xl mx-auto">
                        {quienesSomosHero.descripcion}
                    </p>

                    {/* Botón CTA */}
                    <div className="pt-2">
                        <a 
                        href="/contacto"
                        className="inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-purple-600 text-white font-semibold rounded-lg lg:rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-lg text-sm lg:text-base"
                        >
                        Conoce cómo puedes ayudar
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


        {/* MISIÓN Y VISIÓN */}
        <section 
            ref={misionVisionRef}
            className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-1000 ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                
                {/* Misión */}
                <div className={`transition-all duration-1000 delay-200 ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                        {renderIcon(misionData.icono, 'w-7 h-7 lg:w-8 lg:h-8 text-purple-600')}
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{misionData.titulo}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{misionData.descripcion}</p>
                    </div>
                </div>
                </div>

                {/* Visión */}
                <div className={`transition-all duration-1000 delay-400 ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                        {renderIcon(visionData.icono, 'w-7 h-7 lg:w-8 lg:h-8 text-blue-600')}
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{visionData.titulo}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{visionData.descripcion}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* HISTORIA */}
        <section 
        ref={historiaRef}
        className={`py-16 lg:py-24 bg-white/80 backdrop-blur-sm transition-all duration-1000 ${historiaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${historiaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="w-12 lg:w-16 h-0.5 bg-purple-600" />
                <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-purple-600">{historiaData.etiqueta}</span>
                <div className="w-12 lg:w-16 h-0.5 bg-purple-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mt-4 mb-6 lg:mb-8">
                {historiaData.titulo}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {historiaData.descripcion}
                </p>
            </div>

            {/* Timeline horizontal */}
            <div className="relative">
                {/* Línea horizontal - oculta en mobile */}
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-purple-200"></div>
                
                {/* Contenedor scrolleable en mobile */}
                <div className="lg:hidden overflow-x-auto pb-4">
                <div className="flex space-x-6 min-w-max">
                    {historiaData.timeline.map((item, index) => (
                    <div 
                        key={index}
                        className={`flex-shrink-0 w-72 transition-all duration-1000 ${historiaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{transitionDelay: `${(index + 1) * 200 + 400}ms`}}
                    >
                        <div className="space-y-4">
                        {/* Punto y año */}
                        <div className="flex items-center space-x-4">
                            <div className={`w-4 h-4 rounded-full ${index % 3 === 0 ? 'bg-purple-600' : index % 3 === 1 ? 'bg-blue-600' : 'bg-pink-600'} flex-shrink-0`}></div>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${index % 3 === 0 ? 'bg-purple-100 text-purple-700' : index % 3 === 1 ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}>
                            {item.año}
                            </div>
                        </div>
                        
                        {/* Contenido */}
                        <div className="space-y-3 pl-8">
                            <h3 className="text-lg font-bold text-gray-900">{item.evento}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.descripcion}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Grid desktop */}
                <div className="hidden lg:grid lg:grid-cols-6 gap-8">
                {historiaData.timeline.map((item, index) => (
                    <div 
                    key={index}
                    className={`relative transition-all duration-1000 ${historiaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{transitionDelay: `${(index + 1) * 200 + 400}ms`}}
                    >
                    {/* Punto en la línea */}
                    <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${index % 3 === 0 ? 'bg-purple-600' : index % 3 === 1 ? 'bg-blue-600' : 'bg-pink-600'} border-4 border-white shadow-lg z-10`}></div>
                    
                    {/* Contenido */}
                    <div className="pt-16 space-y-4">
                        {/* Año */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${index % 3 === 0 ? 'bg-purple-100 text-purple-700' : index % 3 === 1 ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}>
                        {item.año}
                        </div>
                        
                        {/* Evento y descripción */}
                        <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.evento}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.descripcion}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        {/* VALORES */}
        <section 
            ref={valoresRef}
            className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-1000 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-20 transition-all duration-1000 delay-200 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="w-12 lg:w-16 h-0.5 bg-purple-600" />
                <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-purple-600">{valoresData.etiqueta}</span>
                <div className="w-12 lg:w-16 h-0.5 bg-purple-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mt-4 mb-6 lg:mb-8">
                {valoresData.titulo}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {valoresData.descripcion}
                </p>
            </div>

            {/* Grid de valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {valores.map((valor, index) => (
                <div 
                    key={index}
                    className={`group transition-all duration-1000 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{transitionDelay: `${(index + 1) * 100 + 400}ms`}}
                >
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="space-y-4">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {renderIcon(valor.icono, 'w-6 h-6 lg:w-7 lg:h-7 text-purple-600')}
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900">{valor.nombre}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{valor.descripcion}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* IMPACTO */}
        <section 
            ref={impactoRef}
            className={`py-16 lg:py-24 bg-gradient-to-br from-purple-50/50 via-stone-50/80 to-blue-50/50 transition-all duration-1000 ${impactoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-20 transition-all duration-1000 delay-200 ${impactoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="w-12 lg:w-16 h-0.5 bg-blue-600" />
                <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-blue-600">{impactoData.etiqueta}</span>
                <div className="w-12 lg:w-16 h-0.5 bg-blue-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 lg:mt-4 mb-6 lg:mb-8">
                {impactoData.titulo}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {impactoData.descripcion}
                </p>
            </div>

            {/* Grid de estadísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {estadisticasImpacto.map((stat, index) => (
                <div 
                    key={index}
                    className={`group text-center transition-all duration-1000 ${impactoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{transitionDelay: `${(index + 1) * 100 + 400}ms`}}
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="space-y-3 lg:space-y-4">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {stat.numero}
                        </div>
                        <div className="text-lg lg:text-xl font-semibold text-gray-900">{stat.texto}</div>
                        <p className="text-gray-600 text-sm lg:text-base">{stat.descripcion}</p>
                        <div className="w-16 h-0.5 bg-blue-200 mx-auto group-hover:w-20 group-hover:bg-blue-400 transition-all duration-300" />
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* COMPROMISO FUTURO */}
        <section 
            ref={compromisoRef}
            className={`py-16 lg:py-24 bg-white/80 backdrop-blur-sm transition-all duration-1000 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Contenido */}
                <div className={`transition-all duration-1000 delay-200 ${compromisoInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="space-y-6 lg:space-y-8">
                    <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center gap-3 lg:gap-4">
                        <div className="w-12 lg:w-16 h-0.5 bg-purple-600" />
                        <span className="text-xs lg:text-sm font-bold uppercase tracking-wider text-purple-600">{compromisoFuturoData.etiqueta}</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {compromisoFuturoData.titulo}
                    </h2>
                    
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                        {compromisoFuturoData.descripcion}
                    </p>
                    </div>

                    {/* Lista de compromisos */}
                    <div className="space-y-3 lg:space-y-4">
                    {compromisosLista.map((compromiso, i) => (
                        <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm lg:text-base">{compromiso}</span>
                        </div>
                    ))}
                    </div>

                    <div className="pt-4">
                    <a 
                        href="/contacto" 
                        className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-purple-600 text-white font-semibold rounded-xl lg:rounded-2xl hover:bg-purple-700 transition-all duration-300 shadow-lg"
                    >
                        Únete a nuestra misión
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    </div>
                </div>
                </div>

                {/* Imagen */}
                <div className={`transition-all duration-1000 delay-400 ${compromisoInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="relative">
                    <div className="aspect-[4/3] max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl lg:rounded-3xl transform rotate-2" />
                    <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-700">
                        <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-purple-100 rounded-3xl flex items-center justify-center">
                            {renderIcon('crecimiento', 'w-8 h-8 lg:w-10 lg:h-10 text-purple-600')}
                            </div>
                            <p className="text-base lg:text-lg font-semibold text-gray-600 mb-2">Nuestro Futuro</p>
                            <p className="text-sm text-gray-400">Compromiso continuo</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 w-20 h-20 lg:w-24 lg:h-24 bg-purple-200/40 rounded-full blur-2xl" />
                    <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-16 h-16 lg:w-20 lg:h-20 bg-blue-200/50 rounded-full blur-xl" />
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* FOOTER - Reutilizado del inicio */}
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
