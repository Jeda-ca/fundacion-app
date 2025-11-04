import { useInView } from '../hooks'
import { IconRenderer } from '../components/ui'
import { Footer } from '../components/layout'

// Importar datos necesarios
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
                className={`relative py-12 lg:py-16 flex items-center justify-center transition-all duration-1000 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
                style={{ minHeight: 'calc(100vh - 80px)' }}
            >
                {/* Fondo decorativo sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-stone-50 to-pink-50/30" />
                
                {/* Contenedor principal */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center space-y-6 lg:space-y-8">
                        
                        {/* IMAGEN ESTÁTICA CENTRADA */}
                        <div className={`transition-all duration-1000 delay-200 ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <div className="relative mx-auto mb-4 lg:mb-6">
                                {/* Imagen principal */}
                                <div className="relative size-72 sm:size-80 lg:size-96 mx-auto">
                                    {/* Elementos decorativos de fondo - Reducidos */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl lg:rounded-3xl transform rotate-2 opacity-60" />
                                    <div className="absolute inset-1 lg:inset-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl lg:rounded-3xl transform -rotate-1 opacity-40" />
                                    
                                    {/* Marco principal */}
                                    <div className="relative size-full bg-white rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden">
                                        <div className="size-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                                            {/* Placeholder elegante */}
                                            <div className="text-center text-gray-400">
                                                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 2 2 0 01.75-1.424M12 4.354a4 4 0 110 5.292m-3 5.197h6m-3 0a3 3 0 01-3-3V8a3 3 0 016 0v6a3 3 0 01-3 3z" />
                                                    </svg>
                                                </div>
                                                <p className="text-lg lg:text-xl font-semibold text-gray-500 mb-2">Imagen representativa</p>
                                                <p className="text-base text-gray-400">Fundación Atma Namasté</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Elementos decorativos flotantes - Reducidos */}
                                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-2xl" />
                                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-xl" />
                            </div>
                        </div>

                        {/* CONTENIDO INMEDIATAMENTE DESPUÉS DE LA IMAGEN */}
                        <div className={`space-y-4 lg:space-y-6 transition-all duration-1000 delay-500 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            {/* Badge elegante */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-lg">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-purple-700">{quienesSomosHeroData.subtitulo}</span>
                            </div>

                            {/* Título principal */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                                <span className="block">{quienesSomosHeroData.titulo}</span>
                            </h1>
                            
                            {/* Descripción ampliada */}
                            <div className="max-w-4xl mx-auto space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                                    {quienesSomosHeroData.descripcion}
                                </p>
                                <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                    Nuestra fundación nace del compromiso profundo con la transformación social y espiritual. Creemos en el poder del amor incondicional y la educación integral para generar cambios duraderos en las comunidades más necesitadas. Cada día trabajamos con la convicción de que un mundo mejor es posible cuando nos unimos en propósito común.
                                </p>
                            </div>

                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 justify-center">
                                <a 
                                    href="/programas"
                                    className="group relative px-8 py-4 bg-pink-600 text-white font-semibold rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                                >
                                    <span className="relative flex items-center justify-center gap-2">
                                        Conoce nuestros programas
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </a>
                                
                                <a 
                                    href="/contacto"
                                    className="group px-8 py-4 text-pink-600 font-semibold rounded-2xl border-2 border-pink-600 hover:bg-pink-50 transition-all duration-300 text-center"
                                >
                                    <span className="relative z-10">Contáctanos</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISIÓN Y VISIÓN - EN CARDS COMO PROGRAMAS */}
            <section 
                ref={misionVisionRef}
                className={`py-16 lg:py-24 bg-white/80 backdrop-blur-sm transition-all duration-1000 ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        
                        {/* MISIÓN - Card estilo Programas */}
                        <div className={`transition-all duration-1000 delay-200 ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-2xl lg:rounded-3xl border-2 border-pink-200 shadow-xl hover:shadow-2xl hover:border-pink-300 transition-all duration-500 h-full">
                                <div className="space-y-6 lg:space-y-8">
                                    {/* Header con icono */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                                            <IconRenderer tipo={misionData.icono} className="w-8 h-8 lg:w-9 lg:h-9 text-pink-600" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{misionData.titulo}</h3>
                                    </div>
                                    
                                    {/* Contenido expandido */}
                                    <div className="space-y-4">
                                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                                            Transformamos vidas a través del amor y la educación integral
                                        </p>
                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                            {misionData.descripcion}
                                        </p>
                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                            Nuestro trabajo se fundamenta en la creencia de que cada persona tiene un potencial infinito que puede ser despertado mediante el acompañamiento amoroso, la educación de calidad y las prácticas espirituales. Desarrollamos programas integrales que abordan no solo las necesidades inmediatas, sino que fortalecen las capacidades humanas para generar transformaciones duraderas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* VISIÓN - Card estilo Programas */}
                        <div className={`transition-all duration-1000 delay-400 ${misionVisionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-2xl lg:rounded-3xl border-2 border-purple-200 shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-500 h-full">
                                <div className="space-y-6 lg:space-y-8">
                                    {/* Header con icono */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg">
                                            <IconRenderer tipo={visionData.icono} className="w-8 h-8 lg:w-9 lg:h-9 text-purple-600" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{visionData.titulo}</h3>
                                    </div>
                                    
                                    {/* Contenido expandido */}
                                    <div className="space-y-4">
                                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                                            Liderando la construcción de una sociedad más justa y consciente
                                        </p>
                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                            {visionData.descripcion}
                                        </p>
                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                            Visualizamos un futuro donde las redes de apoyo comunitario sean el pilar fundamental de la sociedad, donde cada individuo encuentre su propósito y contribuya al bienestar colectivo. Aspiramos a ser el ejemplo viviente de que la espiritualidad práctica y el servicio desinteresado pueden generar transformaciones sistémicas que perduren en el tiempo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NUESTROS VALORES - UNA FILA ELEGANTE */}
            <section 
                ref={valoresRef}
                className={`py-16 lg:py-24 bg-gradient-to-br from-pink-50/50 via-stone-50/80 to-purple-50/50 transition-all duration-1000 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    {/* Título central con más información */}
                    <div className={`text-center max-w-5xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4">
                            <div className="w-16 h-0.5 bg-pink-600" />
                            <span className="text-sm font-bold uppercase tracking-wider text-pink-600">{valoresData.etiqueta}</span>
                            <div className="w-16 h-0.5 bg-pink-600" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-8">
                            {valoresData.titulo}
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6">
                            {valoresData.descripcion}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Estos valores no son solo palabras bonitas; son la brújula que guía cada decisión, cada programa y cada interacción que tenemos con las comunidades que servimos. Los vivimos día a día como la expresión auténtica de nuestro compromiso con la transformación social, y se reflejan en cada acto de servicio que realizamos con las familias y comunidades que acompañamos en su crecimiento integral.
                        </p>
                    </div>

                    {/* Grid de valores - UNA FILA ELEGANTE SIN CARDS EXCESIVAS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {valores.map((valor, index) => (
                            <div 
                                key={index} 
                                className={`group text-center transition-all duration-1000 ${valoresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{transitionDelay: `${(index + 1) * 150 + 600}ms`}}
                            >
                                {/* Diseño minimalista elegante */}
                                <div className="space-y-4 lg:space-y-5 p-4">
                                    {/* Icono principal */}
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 lg:w-18 lg:h-18 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-400 border border-pink-100">
                                            <IconRenderer tipo={valor.icono || "estrella"} className="w-8 h-8 lg:w-9 lg:h-9 text-pink-600" />
                                        </div>
                                    </div>
                                    
                                    {/* Contenido */}
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

            {/* COMPROMISO CON EL FUTURO */}
            <section 
                ref={compromisoRef}
                className={`py-16 lg:py-24 bg-white/60 backdrop-blur-sm transition-all duration-1000 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                <div className="max-w-6xl mx-auto px-4 lg:px-8">
                    {/* Título y descripción central */}
                    <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4">
                            <div className="w-16 h-0.5 bg-orange-600" />
                            <span className="text-sm font-bold uppercase tracking-wider text-orange-600">{compromisoFuturoData.etiqueta}</span>
                            <div className="w-16 h-0.5 bg-orange-600" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-8">
                            {compromisoFuturoData.titulo}
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6">
                            {compromisoFuturoData.descripcion}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            El futuro que construimos hoy será el legado que dejemos a las próximas generaciones. Por eso, cada acción está orientada hacia la sostenibilidad, la replicabilidad y el impacto sistémico que trasciende los límites geográficos y temporales. Trabajamos con una visión de largo plazo que honra el pasado y construye el porvenir.
                        </p>
                    </div>

                    {/* Lista de compromisos - Grid elegante estilo Programas */}
                    <div className={`transition-all duration-1000 delay-600 ${compromisoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                            {compromisosLista.map((compromiso, i) => (
                                <div 
                                    key={i} 
                                    className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border-2 border-orange-200 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all duration-400 hover:scale-[1.02]"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-3 h-3 bg-orange-600 rounded-full" />
                                        </div>
                                        <span className="text-gray-700 text-lg lg:text-xl font-semibold leading-relaxed">{compromiso}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call-to-action elegante */}
                        <div className="text-center pt-8">
                            <div className="space-y-4">
                                <p className="text-lg lg:text-xl text-gray-700 font-medium">
                                    ¿Te inspira nuestra visión de futuro?
                                </p>
                                <a 
                                    href="/programas" 
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-semibold rounded-2xl hover:bg-orange-700 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                                >
                                    Únete a nuestra misión
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
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
