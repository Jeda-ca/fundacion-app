import { useInView } from '../hooks'
import { Footer } from '../components/layout'
import { donacionesHeroData, paypalDonationData } from '../data/donacionesData'

export default function Donaciones() {
  const [heroRef, heroInView] = useInView(0.1)
  const [donacionRef, donacionInView] = useInView(0.15)

  const handleDonateClick = () => {
    window.open(paypalDonationData.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* HERO SIMPLE */}
      <section
        ref={heroRef}
        className={`relative pt-12 sm:pt-16 lg:pt-20 pb-8 lg:pb-12 transition-all duration-700 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-pink-200/60 shadow-sm mb-6">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-pink-700">
              {donacionesHeroData.subtitulo}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {donacionesHeroData.titulo}
          </h1>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
            {donacionesHeroData.descripcion}
          </p>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL DE DONACIÓN - LAYOUT COMO LA IMAGEN */}
      <section
        ref={donacionRef}
        className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-700 ${
          donacionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Header centrado */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-0.5 bg-pink-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                Donación Segura
              </span>
              <div className="w-16 h-0.5 bg-pink-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {paypalDonationData.titulo}
            </h2>
          </div>

          {/* Layout principal - 2 columnas como en la imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA - Contenido */}
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {paypalDonationData.descripcion}
              </p>
              
              {/* Lista de beneficios */}
              <div className="space-y-4">
                {paypalDonationData.detalles.map((detalle, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{detalle}</span>
                  </div>
                ))}
              </div>

              {/* Botón de donación */}
              <div className="pt-6">
                <button
                  onClick={handleDonateClick}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-2xl hover:from-pink-600 hover:to-pink-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-base shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Donar Ahora
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                </button>
              </div>

              {/* Información importante */}
              <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-700 font-semibold text-sm mb-1">Información importante:</p>
                    <p className="text-blue-600 text-sm">
                      Al hacer clic en "Donar Ahora" serás redirigido de forma segura a PayPal para completar tu transacción. Todas las donaciones están protegidas por la seguridad de PayPal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA - Ilustración del corazón */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Fondo decorativo rosa */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full transform rotate-6 scale-110"></div>
                
                {/* Contenedor principal */}
                <div className="relative bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-12 lg:p-16 border border-pink-200/60 shadow-xl">
                  {/* Corazón grande */}
                  <div className="text-center">
                    <div className="mb-6">
                      <svg className="w-24 h-24 lg:w-32 lg:h-32 mx-auto text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    
                    {/* Texto inspiracional */}
                    <h3 className="text-xl lg:text-2xl font-bold text-pink-600 mb-2">
                      Transformando vidas juntos
                    </h3>
                    <p className="text-pink-500 text-sm lg:text-base">
                      Tu generosidad marca la diferencia
                    </p>
                  </div>

                  {/* Decoraciones adicionales */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 left-4 w-2 h-2 bg-pink-300 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL SIMPLIFICADO */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50/30 to-orange-50/30">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              ¡Gracias por tu generosidad!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Tu donación nos permite continuar con nuestra misión de transformar vidas y construir un futuro lleno de esperanza para las familias de nuestra comunidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 text-pink-600 font-semibold rounded-xl border-2 border-pink-600 hover:bg-pink-50 transition-all duration-300"
              >
                Contáctanos
              </a>
              
              <a
                href="/programas"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 text-pink-600 font-semibold rounded-xl border-2 border-pink-600 hover:bg-pink-50 transition-all duration-300"
              >
                Conoce nuestros programas
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
