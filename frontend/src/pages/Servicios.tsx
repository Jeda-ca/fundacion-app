import { useInView } from '../hooks'
import { Footer } from '../components/layout'
import { 
  SectionHeader, 
  Container, 
  ImagePlaceholder, 
  Badge, 
  Button 
} from '../components/ui'
import { serviciosHeroData, serviciosLista } from '../data/serviciosData'

export default function Servicios() {
  const [heroRef, heroInView] = useInView(0.1)
  const [saludRef, saludInView] = useInView(0.15)
  const [deporteRef, deporteInView] = useInView(0.15)
  const [espiritualRef, espiritualInView] = useInView(0.15)

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className={`relative pt-12 sm:pt-16 lg:pt-20 pb-12 lg:pb-16 transition-all duration-600 ease-smooth ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Container size="md">
          <div className="text-center space-y-8">
            <Badge color="pink">{serviciosHeroData.subtitulo}</Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              {serviciosHeroData.titulo}
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              {serviciosHeroData.descripcion}
            </p>

            <ImagePlaceholder 
              icon="salud"
              title="Jornadas comunitarias"
              subtitle="Momentos de encuentro y crecimiento"
              aspectRatio="3/2"
              gradient="pink-orange"
              className="max-w-xl lg:max-w-2xl mx-auto"
            />
          </div>
        </Container>
      </section>

      {/* JORNADAS DE SALUD */}
      <section
        ref={saludRef}
        className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-600 ease-smooth ${
          saludInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
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
              
              <div className="bg-pink-50/80 rounded-xl p-6 border border-pink-200/50">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {serviciosLista[0].descripcionCompleta}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Lo que incluimos:</h4>
                <div className="space-y-3">
                  {serviciosLista[0].queIncluye.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen */}
            <ImagePlaceholder 
              icon="salud"
              title="Jornadas de salud"
              subtitle="Cuidando la comunidad"
              gradient="pink-orange"
            />
          </div>
        </Container>
      </section>

      {/* JORNADAS DEPORTIVAS */}
      <section
        ref={deporteRef}
        className={`py-16 lg:py-20 bg-white/80 backdrop-blur-sm transition-all duration-600 ease-smooth ${
          deporteInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Imagen primero en desktop */}
            <div className="lg:order-1">
              <ImagePlaceholder 
                icon="deporte"
                title="Jornadas deportivas"
                subtitle="Deporte y comunidad"
                gradient="purple-blue"
              />
            </div>

            {/* Contenido */}
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
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
              
              <div className="bg-purple-50/80 rounded-xl p-6 border border-purple-200/50">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {serviciosLista[1].descripcionCompleta}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Actividades que realizamos:</h4>
                <div className="space-y-3">
                  {serviciosLista[1].queIncluye.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* JORNADAS EDU ARHAT */}
      <section
        ref={espiritualRef}
        className={`py-16 lg:py-20 bg-white/60 backdrop-blur-sm transition-all duration-600 ease-smooth ${
          espiritualInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
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
              
              <div className="bg-orange-50/80 rounded-xl p-6 border border-orange-200/50">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {serviciosLista[2].descripcionCompleta}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">En nuestros encuentros incluimos:</h4>
                <div className="space-y-3">
                  {serviciosLista[2].queIncluye.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen */}
            <ImagePlaceholder 
              icon="meditacion"
              title="Edu Arhat"
              subtitle="Crecimiento interior"
              gradient="orange-yellow"
            />
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-pink-50/30 to-orange-50/30">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              ¿Te interesa alguno de nuestros servicios?
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Nos encantaría conocerte y acompañarte en este camino de crecimiento y transformación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button href="/contacto" variant="primary">
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
              </Button>
              
              <Button href="/programas" variant="secondary">
                Ver programas
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
