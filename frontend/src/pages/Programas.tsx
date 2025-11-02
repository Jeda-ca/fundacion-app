import { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { useInView, useScrollEffects } from '../hooks'
import { IconRenderer } from '../components/ui'
import { Footer } from '../components/layout'

// Importar datos necesarios
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

            {/* Programas en diseño alternado */}
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
                                <IconRenderer tipo={programa.icono} className='size-10 lg:size-12 text-white' />
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
                            <IconRenderer tipo={programa.icono} className='size-6 lg:size-7 text-pink-600' />
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
            ref={compromisoRef}
            className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-700 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
            <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Columna izquierda: texto introductorio */}
                <div
                    className={`lg:col-span-1 transition-all duration-700 delay-200 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <div className="space-y-4 lg:space-y-5">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-0.5 bg-purple-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                        Nuestros Compromisos
                        </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Lo que garantizamos
                    </h2>

                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                        Cada programa está respaldado por nuestro compromiso con la excelencia educativa y el desarrollo integral, con enfoque humano y espiritual.
                    </p>
                    </div>
                </div>

                {/* Columna derecha: grilla 2x3 con márgenes estables para listado */}
                <div
                    className={`lg:col-span-2 transition-all duration-700 delay-300 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {compromisosLista.map((compromiso, i) => (
                        <div
                        key={i}
                        className="flex items-start gap-3 bg-white border border-purple-100 rounded-xl p-4 shadow-sm"
                        >
                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                        </div>
                        <span className="text-gray-700 leading-relaxed text-sm lg:text-base">{compromiso}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* Footer - Componente reutilizable */}
        <Footer />
        </main>
    )
}