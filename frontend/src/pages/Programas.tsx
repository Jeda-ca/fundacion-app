import { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { useInView, useScrollEffects } from '../hooks'
import { IconRenderer } from '../components/ui'
import { Container, Badge, ImagePlaceholder } from '../components/ui'
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
                
                <Container className="relative z-10">
                    <div className="text-center space-y-8">
                        <Badge color="pink">Educación que transforma</Badge>
                        
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
                </Container>
            </section>

            {/* PROGRAMAS DETALLADOS */}
            <section 
                ref={programasRef}
                className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-600 ease-smooth ${
                    programasInView ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'
                }`}
            >
                <Container>
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-purple-500" />
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                                {impactoProgramasData.etiqueta}
                            </span>
                            <div className="w-12 h-0.5 bg-purple-500" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {impactoProgramasData.titulo}
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                            {impactoProgramasData.descripcion}
                        </p>
                    </div>
                    
                    {/* Grid de programas */}
                    <div className="space-y-20">
                        {programasDetallados.map((programa, idx) => (
                            <div 
                                key={programa.id}
                                id={programa.id}
                                className={`transition-all duration-700 ${programasInView ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-4'}`}
                                style={{transitionDelay: `${(idx + 1) * 150 + 300}ms`}}
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                    
                                    {/* Imagen */}
                                    <div className={`w-full ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <ImagePlaceholder 
                                            icon={programa.icono}
                                            title={programa.nombre}
                                            subtitle="Programa educativo"
                                            gradient="pink-orange"
                                        />
                                    </div>
                                    
                                    {/* Contenido */}
                                    <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-0.5 bg-pink-500" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                                                Programa {idx + 1}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                            {programa.nombre}
                                        </h3>
                                        
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {programa.descripcionLarga}
                                        </p>
                                        
                                        {/* Detalles del programa */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-gray-900 text-sm">Edad objetivo:</h4>
                                                <p className="text-gray-600">{programa.edadTarget}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-gray-900 text-sm">Duración:</h4>
                                                <p className="text-gray-600">{programa.duracion}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-gray-900 text-sm">Modalidad:</h4>
                                                <p className="text-gray-600">{programa.modalidad}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-gray-900 text-sm">Horario:</h4>
                                                <p className="text-gray-600">
                                                    {programa.horario ? `${programa.horario.dias} • ${programa.horario.horas}` : "A convenir"}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Objetivos */}
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900">Objetivos principales:</h4>
                                            <ul className="space-y-3">
                                                {programa.objetivos.slice(0, 3).map((objetivo, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2" />
                                                        <span className="text-gray-700">{objetivo}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* COMPROMISOS */}
            <section
                ref={compromisoRef}
                className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-600 ease-smooth ${
                    compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
                <Container size="xl">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-pink-600" />
                            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                                Nuestros Compromisos
                            </span>
                            <div className="w-12 h-0.5 bg-pink-600" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                            Lo que garantizamos
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Cada programa está respaldado por nuestro compromiso con la excelencia educativa y el desarrollo integral.
                        </p>
                    </div>
                    
                    {/* Grid simple */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                        {compromisosLista.map((compromiso, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-3 h-3 mt-2 bg-pink-500 rounded-full flex-shrink-0" />
                                <span className="text-gray-700 text-base lg:text-lg">{compromiso}</span>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            <Footer />
        </main>
    )
}
