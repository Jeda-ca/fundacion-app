import { useInView } from '../hooks'
import { Footer } from '../components/layout'
import { Container, Badge, Button } from '../components/ui'
import { donacionesHeroData, paypalDonationData } from '../data/donacionesData'

export default function Donaciones() {
  const [heroRef, heroInView] = useInView(0.1)
  const [donacionRef, donacionInView] = useInView(0.15)

  const handleDonateClick = () => {
    window.open(paypalDonationData.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className={`relative pt-12 sm:pt-16 lg:pt-20 pb-12 lg:pb-16 transition-all duration-600 ease-smooth ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Container>
          <div className="text-center space-y-6">
            <Badge color="pink">{donacionesHeroData.subtitulo}</Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              {donacionesHeroData.titulo}
            </h1>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
              {donacionesHeroData.descripcion}
            </p>
          </div>
        </Container>
      </section>

      {/* SECCIÓN PRINCIPAL DE DONACIÓN */}
      <section
        ref={donacionRef}
        className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-600 ease-smooth ${
          donacionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-pink-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                Donación Segura
              </span>
              <div className="w-12 h-0.5 bg-pink-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {paypalDonationData.titulo}
            </h2>
          </div>

          {/* Layout 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {paypalDonationData.descripcion}
              </p>
              
              {/* Lista de beneficios */}
              <div className="space-y-3">
                {paypalDonationData.detalles.map((detalle, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{detalle}</span>
                  </div>
                ))}
              </div>

              {/* Botón */}
              <div className="pt-6">
                <Button onClick={handleDonateClick} variant="primary">
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
                </Button>
              </div>

              {/* Información */}
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

            {/* COLUMNA DERECHA - Corazón */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full transform rotate-6 scale-110"></div>
                
                <div className="relative bg-gradient-pink-orange rounded-2xl p-12 lg:p-16 border border-pink-200/50 shadow-lg">
                  <div className="text-center">
                    <div className="mb-6">
                      <svg className="w-24 h-24 lg:w-32 lg:h-32 mx-auto text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-pink-600 mb-2">
                      Transformando vidas juntos
                    </h3>
                    <p className="text-pink-500 text-sm lg:text-base">
                      Tu generosidad marca la diferencia
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 left-4 w-2 h-2 bg-pink-300 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MENSAJE INFORMATIVO PARA DONACIONES NO MONETARIAS */}
      <section className={`py-8 lg:py-12 bg-white/70 backdrop-blur-sm transition-all duration-600 ease-smooth ${
          donacionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <Container size="md">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-orange-200/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  ¿Deseas hacer donaciones no monetarias?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  También aceptamos donaciones de materiales, alimentos, ropa, útiles escolares y otros recursos que puedan beneficiar a nuestras familias y programas.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Si tienes algo que donar, puedes contactarnos a través de cualquiera de nuestros canales disponibles en la sección de <span className="font-semibold text-pink-600">Contáctanos</span>: correo electrónico, teléfono, WhatsApp o nuestras redes sociales.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <a 
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Ver información de contacto
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.297"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-pink-50/30 to-orange-50/30">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              ¡Gracias por tu generosidad!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Tu donación nos permite continuar con nuestra misión de transformar vidas y construir un futuro lleno de esperanza para las familias de nuestra comunidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button href="/contacto" variant="secondary">
                Contáctanos
              </Button>
              
              <Button href="/programas" variant="secondary">
                Conoce nuestros programas
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
