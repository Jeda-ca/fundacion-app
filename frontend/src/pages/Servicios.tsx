import { useInView } from '../hooks'
import { Footer } from '../components/layout'
import { IconRenderer } from '../components/ui'
import { serviciosHeroData, categoriasServicios } from '../data/serviciosData'
import type { CategoriaServicios, ServicioItem } from '../types/index'

export default function Servicios() {
  const [heroRef, heroInView] = useInView(0.1)
  const [educacionRef, educacionInView] = useInView(0.15)
  const [arteRef, arteInView] = useInView(0.15)
  const [bienestarRef, bienestarInView] = useInView(0.15)
  const [apoyoRef, apoyoInView] = useInView(0.15)

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className={`relative pt-12 sm:pt-16 lg:pt-20 pb-10 lg:pb-14 transition-all duration-700 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-orange-200/60 shadow-sm mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-orange-700">
              {serviciosHeroData.subtitulo}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            {serviciosHeroData.titulo}
          </h1>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto mb-8">
            {serviciosHeroData.descripcion}
          </p>

          {/* Imagen Hero */}
          <div className="w-full max-w-2xl mx-auto aspect-[3/2] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 border border-orange-200/60 shadow-lg flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-orange-500 space-y-3">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-medium">Imagen de servicios</span>
              <span className="text-xs text-orange-400">Fundación en acción</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCACIÓN Y DESARROLLO */}
      <section
        ref={educacionRef}
        className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-700 ${
          educacionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-pink-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                  {categoriasServicios[0].etiqueta}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {categoriasServicios[0].titulo}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {categoriasServicios[0].descripcion}
              </p>
              
              {/* Lista simple sin cards */}
              <div className="space-y-4 pt-4">
                {categoriasServicios[0].servicios.map((servicio: ServicioItem, i: number) => (
                  <div key={servicio.id} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      servicio.destacado ? 'bg-pink-100 text-pink-600' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <IconRenderer tipo={servicio.icono || 'estrella'} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {servicio.titulo}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {servicio.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen */}
            <div className="w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200/60 shadow-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-pink-500 space-y-3">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  <span className="text-sm font-medium text-center">Programas educativos</span>
                  <span className="text-xs text-pink-400 text-center">En acción</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTE Y CULTURA + BIENESTAR (Combinadas) */}
      <section
        ref={arteRef}
        className={`py-16 lg:py-20 bg-white/80 backdrop-blur-sm transition-all duration-700 ${
          arteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* ARTE Y CULTURA */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-purple-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  {categoriasServicios[1].etiqueta}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {categoriasServicios[1].titulo}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {categoriasServicios[1].descripcion}
              </p>
              
              <div className="space-y-3">
                {categoriasServicios[1].servicios.map((servicio: ServicioItem) => (
                  <div key={servicio.id} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{servicio.titulo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BIENESTAR Y ESPIRITUALIDAD */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  {categoriasServicios[2].etiqueta}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {categoriasServicios[2].titulo}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {categoriasServicios[2].descripcion}
              </p>
              
              <div className="space-y-3">
                {categoriasServicios[2].servicios.map((servicio: ServicioItem) => (
                  <div key={servicio.id} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{servicio.titulo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APOYO SOCIAL */}
      <section
        ref={apoyoRef}
        className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-700 ${
          apoyoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Imagen primero en este */}
            <div className="w-full lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 border border-orange-200/60 shadow-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-orange-500 space-y-3">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-sm font-medium text-center">Apoyo social</span>
                  <span className="text-xs text-orange-400 text-center">Solidaridad en acción</span>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-pink-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                  {categoriasServicios[3].etiqueta}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {categoriasServicios[3].titulo}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {categoriasServicios[3].descripcion}
              </p>
              
              {/* Lista simple sin cards */}
              <div className="space-y-4 pt-4">
                {categoriasServicios[3].servicios.map((servicio: ServicioItem, i: number) => (
                  <div key={servicio.id} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      servicio.destacado ? 'bg-pink-100 text-pink-600' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <IconRenderer tipo={servicio.icono || 'estrella'} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {servicio.titulo}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {servicio.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              ¿Te interesa alguno de nuestros servicios?
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Nos encantaría conocerte y acompañarte en este camino de crecimiento y transformación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-pink-600 text-white font-semibold rounded-2xl hover:bg-pink-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Contáctanos
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/programas"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-pink-600 font-semibold rounded-2xl border-2 border-pink-600 hover:bg-pink-50 transition-all duration-300"
              >
                Ver programas
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
