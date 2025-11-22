import { useInView } from '../../hooks'
import { IconRenderer } from '../../components/ui'
import { Container, Badge, Button, ImagePlaceholder } from '../../components/ui'
import { Footer } from '../../components/layout'
import {
    quienesSomosHeroData,
    misionData,
    visionData,
    valoresData,
    valores,
    compromisoFuturoData,
    compromisosLista
} from "../../data/quienesSomosData"

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
                className={`relative py-16 lg:py-20 transition-all duration-600 ease-smooth ${heroInView ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-stone-50 to-pink-50/30" />
                
                <Container className="relative z-10">
                    {/* Badge centrado */}
                    <div className={`text-center mb-8 transition-all duration-600 ease-smooth ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <Badge color="purple">{quienesSomosHeroData.subtitulo}</Badge>
                    </div>

                    {/* Grid de 2 columnas en desktop, 1 en mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        
                        {/* COLUMNA IZQUIERDA - Contenido */}
                        <div className={`space-y-6 lg:space-y-8 transition-all duration-600 ease-smooth delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                                {quienesSomosHeroData.titulo}
                            </h1>
                            
                            <div className="space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                                    {quienesSomosHeroData.descripcion}
                                </p>
                            </div>
                        </div>

                        {/* COLUMNA DERECHA - Imagen */}
                        <div className={`transition-all duration-600 ease-smooth delay-400 ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <ImagePlaceholder 
                                icon="comunidad"
                                title="Nuestra comunidad"
                                subtitle="Juntos transformamos vidas"
                                aspectRatio="4/3"
                                gradient="pink-orange"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* MISIÓN Y VISIÓN */}
            <section 
                ref={misionVisionRef}
                className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-600 ease-smooth ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-16">
                        
                        {[misionData, visionData].map((item, index) => (
                            <div key={index} className={`transition-all duration-600 ease-smooth delay-${index * 200} ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border-2 border-pink-200/50 shadow-lg hover:shadow-xl hover:border-pink-300/50 transition-all duration-300 h-full">
                                    <div className="space-y-6 lg:space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="size-16 lg:size-18 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center shadow-lg">
                                                <IconRenderer tipo={item.icono} className="w-8 h-8 lg:w-9 lg:h-9 text-pink-600" />
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{item.titulo}</h3>
                                        </div>
                                        
                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                            {item.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* VALORES */}
            <section 
                ref={valoresRef}
                className={`py-16 lg:py-20 bg-gradient-to-br from-pink-50/50 via-stone-50/80 to-purple-50/50 transition-all duration-600 ease-smooth ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <Container>
                    <div className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-600 ease-smooth delay-200 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4">
                            <div className="size-0.5 bg-pink-600" />
                            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">{valoresData.etiqueta}</span>
                            <div className="size-0.5 bg-pink-600" />
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
                                className={`group transition-all duration-600 ease-smooth ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{transitionDelay: `${(index + 1) * 100 + 400}ms`}}
                            >
                                <div className="space-y-4 p-4">
                                    <div className="flex justify-center">
                                        <div className="size-16 lg:size-18 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 border border-pink-100">
                                            <IconRenderer tipo={valor.icono || "estrella"} className="size-8 text-pink-600" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 leading-tight text-center">{valor.nombre}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base text-justify">
                                            {valor.descripcion}
                                        </p>
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
                className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-600 ease-smooth ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <Container>
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

                        <ImagePlaceholder 
                            icon="crecimiento"
                            title="Imagen representativa"
                            subtitle="Fundación Atma Namasté"
                            gradient="pink-orange"
                        />
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
                </Container>
            </section>

            <Footer />
        </main>
    )
}
