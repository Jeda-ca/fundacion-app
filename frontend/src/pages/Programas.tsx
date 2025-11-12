import { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { useInView, useScrollEffects } from '../hooks'
import { IconRenderer, Button } from '../components/ui'
import { Footer } from '../components/layout'

import {
    programasHero,
    impactoProgramasData,
    programasDetallados,
    compromisosLista
} from '../data/programasData'

export default function Programas() {
    const scrollY = useScrollEffects()
    const [heroRef, heroInView] = useInView(0.1)
    const [programasRef, programasInView] = useInView(0.2)
    const [compromisoRef, compromisoInView] = useInView(0.25)
    const location = useLocation()

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

    return (
        <main className="bg-stone-50 overflow-hidden">
            {/* HERO */}
            <section 
                ref={heroRef}
                className={`relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-pink-50 via-stone-50 to-purple-50 transition-all duration-600 ease-smooth ${
                    heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                {/* Fondo decorativo */}
                <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
                    <div 
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: `radial-gradient(circle at 30% 40%, #eab3081a 0%, transparent 60%),
                                radial-gradient(circle at 70% 60%, #6366f11a 0%, transparent 60%),
                                radial-gradient(circle at 55% 30%, #db277720 0%, transparent 60%)`
                        }}
                    />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200/50 shadow-sm mb-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-pink-700">Educación que transforma</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                        <span>{programasHero.titulo.parte1}</span>
                        <span className="block text-pink-600">{programasHero.titulo.parte2}</span>
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-blue-600 font-light max-w-3xl mx-auto">
                        {programasHero.subtitulo}
                    </p>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
                        {programasHero.descripcion}
                    </p>
                </div>
            </section>

            {/* PROGRAMAS DETALLADOS (alternados, elegante, sin cards grid) */}
            <section 
                ref={programasRef}
                className={`py-12 sm:py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-600 ease-smooth ${
                    programasInView ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-purple-500" />
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">{impactoProgramasData.etiqueta}</span>
                            <div className="w-12 h-0.5 bg-purple-500" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 px-2">
                            {impactoProgramasData.titulo}
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
                            {impactoProgramasData.descripcion}
                        </p>
                    </div>
                    
                    <div className="space-y-16 sm:space-y-20">
                        {programasDetallados.map((programa, idx) => (
                            <div 
                                key={programa.id}
                                id={programa.id}
                                className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-8 sm:gap-10 lg:gap-20 
                                transition-all duration-700 ${programasInView ? 'opacity-100 translate-y-0' : (idx%2===0?'opacity-90 translate-x-4':'opacity-90 -translate-x-4')}`}
                                style={{transitionDelay: `${(idx + 1) * 150 + 300}ms`}}
                            >
                                {/* Imagen/Placeholder - Ajustado para mobile */}
                                <div className="w-full lg:w-5/12 flex-shrink-0 px-2 sm:px-0">
                                    <div className="aspect-[4/3] bg-gradient-pink-orange rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl flex items-center justify-center">
                                        <IconRenderer tipo={programa.icono} className="w-14 h-14 sm:w-16 sm:h-16 text-white" />
                                    </div>
                                </div>
                                
                                {/* Contenido - Espaciado mejorado para mobile */}
                                <div className="w-full lg:w-7/12 flex flex-col gap-4 sm:gap-5 px-2 sm:px-0">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-1">
                                        <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white border border-pink-100 rounded-xl shadow">
                                            <IconRenderer tipo={programa.icono} className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                                        </span>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{programa.nombre}</h3>
                                    </div>
                                    
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-light leading-relaxed">
                                        {programa.descripcionLarga}
                                    </p>
                                    
                                    {/* Detalles - Grid mejorado para mobile */}
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                                        <div>
                                            <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Edad objetivo:</h4>
                                            <p className="text-sm sm:text-base text-gray-600">{programa.edadTarget}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Duración:</h4>
                                            <p className="text-sm sm:text-base text-gray-600">{programa.duracion}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Modalidad:</h4>
                                            <p className="text-sm sm:text-base text-gray-600">{programa.modalidad}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1">Horario:</h4>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                {programa.horario ? `${programa.horario.dias} • ${programa.horario.horas}` : "A convenir"}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Objetivos - Espaciado mejorado */}
                                    <div className="mt-2">
                                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Objetivos principales:</h4>
                                        <ul className="list-none space-y-2">
                                            {programa.objetivos.slice(0, 3).map((objetivo, i) => (
                                                <li key={i} className="flex items-start gap-2 sm:gap-3">
                                                    <span className="w-2 h-2 mt-1.5 sm:mt-2 bg-purple-500 rounded-full flex-shrink-0" />
                                                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{objetivo}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPROMISOS GRID ELEGANTE */}
            <section
                ref={compromisoRef}
                className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-600 ease-smooth ${
                    compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
                <div className="max-w-5xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-pink-600" />
                            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Nuestros Compromisos</span>
                            <div className="w-12 h-0.5 bg-pink-600" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Lo que garantizamos</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Cada programa está respaldado por nuestro compromiso con la excelencia educativa y el desarrollo integral.
                        </p>
                    </div>
                    {/* Grid simple con bullets claros */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                        {compromisosLista.map((compromiso, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-3 h-3 mt-2 bg-pink-500 rounded-full flex-shrink-0" />
                                <span className="text-gray-700 text-base lg:text-lg">{compromiso}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <Footer />
        </main>
    )
}
