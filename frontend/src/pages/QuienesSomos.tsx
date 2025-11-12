import { useInView } from '../hooks'
import { IconRenderer } from '../components/ui'
import { Button } from '../components/ui'
import { Footer } from '../components/layout'
import {
    quienesSomosHeroData,
    misionData,
    visionData,
    valoresData,
    valores,
    compromisoFuturoData,
    compromisosLista
} from "../data/quienesSomosData"

export default function QuienesSomos() {
    const [heroRef, heroInView] = useInView(0.1)
    const [misionVisionRef, misionVisionInView] = useInView(0.2)
    const [valoresRef, valoresInView] = useInView(0.2)
    const [compromisoRef, compromisoInView] = useInView(0.2)

    return (
        <main className="bg-stone-50 overflow-hidden">
            {/* HERO SECTION */}
            <section 
                ref={heroRef}
                className={`relative py-12 lg:py-16 flex items-center justify-center transition-all duration-600 ease-smooth ${heroInView ? 'opacity-100' : 'opacity-0'}`}
                style={{ minHeight: 'calc(100vh - 80px)' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-stone-50 to-pink-50/30" />
                
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center space-y-6 lg:space-y-8">
                        
                        {/* IMAGEN RECTANGULAR */}
                        <div className={`transition-all duration-600 ease-smooth delay-200 ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <div className="relative mx-auto mb-4 lg:mb-6">
                                <div className="relative w-full max-w-2xl lg:max-w-3xl aspect-[16/9] mx-auto rounded-2xl shadow-xl overflow-hidden ring-1 ring-pink-200/60">
                                    <div className="absolute inset-0 bg-gradient-pink-orange opacity-60" />
                                    <div className="relative w-full h-full bg-white/70 backdrop-blur-sm flex items-center justify-center">
                                        <div className="text-center text-gray-400">
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center shadow-lg">
                                                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h18M3 19h18M5 7h14v10H5z" />
                                                </svg>
                                            </div>
                                            <p className="text-lg lg:text-xl font-semibold text-gray-500">Nuestra comunidad</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-2xl" />
                                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-xl" />
                            </div>
                        </div>

                        {/* CONTENIDO */}
                        <div className={`space-y-4 lg:space-y-6 transition-all duration-600 ease-smooth delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-purple-700">{quienesSomosHeroData.subtitulo}</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                                {quienesSomosHeroData.titulo}
                            </h1>
                            
                            <div className="max-w-4xl mx-auto space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                                    {quienesSomosHeroData.descripcion}
                                </p>
                                <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                    Nuestra fundación nace del compromiso profundo con la transformación social y espiritual. Creemos en el poder del amor incondicional y la educación integral para generar cambios duraderos en las comunidades más necesitadas.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 justify-center">
                                <Button href="/programas" variant="primary">
                                    Conoce nuestros programas
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                                
                                <Button href="/contacto" variant="secondary">
                                    Contáctanos
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISIÓN Y VISIÓN - CARDS SOLO AQUÍ */}
            <section 
                ref={misionVisionRef}
                className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-600 ease-smooth ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <div className="max-w-6xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-16">
                        
                        {[misionData, visionData].map((item, index) => (
                            <div key={index} className={`transition-all duration-600 ease-smooth delay-${index * 200} ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border-2 border-pink-200/50 shadow-lg hover:shadow-xl hover:border-pink-300/50 transition-all duration-300 h-full">
                                    <div className="space-y-6 lg:space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center shadow-lg">
                                                <IconRenderer tipo={item.icono} className="w-8 h-8 lg:w-9 lg:h-9 text-pink-600" />
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{item.titulo}</h3>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                                {item.descripcion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALORES - SIN CARDS, SOLO ICONOS */}
            <section 
                ref={valoresRef}
                className={`py-16 lg:py-20 bg-gradient-to-br from-pink-50/50 via-stone-50/80 to-purple-50/50 transition-all duration-600 ease-smooth ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <div className="max-w-6xl mx-auto px-4 lg:px-8">
                    <div className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-600 ease-smooth delay-200 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4">
                            <div className="w-12 h-0.5 bg-pink-600" />
                            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">{valoresData.etiqueta}</span>
                            <div className="w-12 h-0.5 bg-pink-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-6">
                            {valoresData.titulo}
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                            {valoresData.descripcion}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
                        {valores.map((valor, index) => (
                            <div 
                                key={index} 
                                className={`group text-center transition-all duration-600 ease-smooth ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{transitionDelay: `${(index + 1) * 100 + 400}ms`}}
                            >
                                <div className="space-y-4 p-4">
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 lg:w-18 lg:h-18 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 border border-pink-100">
                                            <IconRenderer tipo={valor.icono || "estrella"} className="w-8 h-8 text-pink-600" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 leading-tight">{valor.nombre}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                            {valor.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPROMISOS - LAYOUT 2 COLUMNAS SIN CARDS */}
            <section 
                ref={compromisoRef}
                className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-600 ease-smooth ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <div className="max-w-6xl mx-auto px-4 lg:px-8">
                    <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-600 ease-smooth delay-200 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4">
                            <div className="w-12 h-0.5 bg-orange-600" />
                            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">{compromisoFuturoData.etiqueta}</span>
                            <div className="w-12 h-0.5 bg-orange-600" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-6">
                            {compromisoFuturoData.titulo}
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                            {compromisoFuturoData.descripcion}
                        </p>
                    </div>
                    
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center transition-all duration-600 ease-smooth delay-400 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        
                        <div className="space-y-4">
                            {compromisosLista.map((compromiso, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2" />
                                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                                        {compromiso}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="w-full">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-pink-orange border border-pink-200/50 shadow-lg flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center text-pink-500 space-y-3">
                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10.5a.5.5 0 01-.84.36l-3.82-3.35a2 2 0 00-2.66.06l-1.67 1.6a2 2 0 01-2.7 0l-3.9-3.74a2 2 0 00-2.76 0L3 13.5V7z" />
                                        <circle cx="8.5" cy="9.5" r="1.5" />
                                    </svg>
                                    <span className="text-sm font-medium text-center">Imagen representativa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`text-center mt-12 lg:mt-16 transition-all duration-600 ease-smooth delay-600 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="space-y-4">
                            <p className="text-lg lg:text-xl text-gray-700 font-medium">
                                ¿Te inspira nuestra visión de futuro?
                            </p>
                            <Button href="/programas" variant="primary">
                                Únete a nuestra misión
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
