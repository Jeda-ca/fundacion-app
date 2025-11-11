import { useInView } from '../hooks'
import { Footer } from '../components/layout'
import { serviciosHeroData, serviciosLista } from '../data/serviciosData'
import { IconRenderer } from '../components/ui'


export default function Servicios() {
  const [heroRef, heroInView] = useInView(0.1)
  const [saludRef, saludInView] = useInView(0.15)
  const [deporteRef, deporteInView] = useInView(0.15)
  const [espritualRef, espiritualInView] = useInView(0.15)

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* HERO MÁS HUMANO */}
      <section
        ref={heroRef}
        className={`relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 transition-all duration-700 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-pink-200/60 shadow-sm mb-8">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-pink-700">
              {serviciosHeroData.subtitulo}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            {serviciosHeroData.titulo}
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light mb-12">
            {serviciosHeroData.descripcion}
          </p>

          {/* Imagen introductoria */}
          <div className="w-full max-w-2xl mx-auto aspect-[3/2] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-orange-100 border border-pink-200/60 shadow-xl flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-pink-500 space-y-4">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 8h2L7 10.5V6H4V4h5c1.1 0 2 .9 2 2v2.5l2.84 3.21c.82.93 1.94 1.47 3.16 1.56V18c-1.1 0-2-.9-2-2v-2h-2.5l-2 2.5L12 18H8z" />
              </svg>
              <div className="text-center">
                <span className="text-lg font-semibold block">Jornadas comunitarias</span>
                <span className="text-sm text-pink-400">Momentos de encuentro y crecimiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JORNADAS DE SALUD */}
      <section
        ref={saludRef}
        className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-700 ${
          saludInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-pink-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                  Salud Comunitaria
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {serviciosLista[0].titulo}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {serviciosLista[0].descripcionCorta}
              </p>
              
              <div className="bg-pink-50/80 rounded-xl p-6 border border-pink-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {serviciosLista[0].descripcionCompleta}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Lo que incluimos:</h4>
                <div className="space-y-2">
                  {serviciosLista[0].queIncluye.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-red-100 border border-pink-200/60 shadow-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-pink-500 space-y-3">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
                  </svg>
                  <span className="text-sm font-medium text-center">Jornadas de salud</span>
                  <span className="text-xs text-pink-400 text-center">Cuidando la comunidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JORNADAS DEPORTIVAS */}
      <section
        ref={deporteRef}
        className={`py-16 lg:py-20 bg-white/80 backdrop-blur-sm transition-all duration-700 ${
          deporteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Imagen primero en esta sección */}
            <div className="w-full lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 border border-purple-200/60 shadow-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-purple-500 space-y-3">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-medium text-center">Jornadas deportivas</span>
                  <span className="text-xs text-purple-400 text-center">Deporte y comunidad</span>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-purple-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  Deporte y Bienestar
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {serviciosLista[1].titulo}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {serviciosLista[1].descripcionCorta}
              </p>
              
              <div className="bg-purple-50/80 rounded-xl p-6 border border-purple-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {serviciosLista[1].descripcionCompleta}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Actividades que realizamos:</h4>
                <div className="space-y-2">
                  {serviciosLista[1].queIncluye.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JORNADAS EDU ARHAT */}
      <section
        ref={espritualRef}
        className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-700 ${
          espiritualInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Crecimiento Espiritual
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {serviciosLista[2].titulo}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {serviciosLista[2].descripcionCorta}
              </p>
              
              <div className="bg-orange-50/80 rounded-xl p-6 border border-orange-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {serviciosLista[2].descripcionCompleta}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">En nuestros encuentros incluimos:</h4>
                <div className="space-y-2">
                  {serviciosLista[2].queIncluye.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100 border border-orange-200/60 shadow-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-orange-500 space-y-3">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-.46 0-.93.04-1.4.14L7.86 5.86C8.58 5.31 9.46 5 10.38 5c.51 0 1.01.1 1.48.28.95.36 1.61 1.15 1.84 2.11l.03.12c0 .05.01.1.01.15 0 .31-.06.6-.16.87-.2.56-.58 1.03-1.09 1.36l-.12.08c-.54.35-1.23.53-1.93.53-.28 0-.56-.04-.83-.11L12 12.8c2.76 0 5-2.24 5-5S14.76 2.8 12 2.8z" />
                  </svg>
                  <span className="text-sm font-medium text-center">Edu Arhat</span>
                  <span className="text-xs text-orange-400 text-center">Crecimiento interior</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
