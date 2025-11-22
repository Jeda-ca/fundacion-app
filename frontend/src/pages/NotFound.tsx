// src/pages/NotFound.tsx
import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  const location = useLocation()

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-pink-200 p-8 md:p-12 text-center">
          
          {/* Número 404 con gradiente */}
          <div className="mb-6">
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Título y descripción */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Lo sentimos, la página que buscas no existe.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Ruta solicitada: <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">{location.pathname}</code>
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Volver al Inicio
            </Link>

            <button
              onClick={() => window.history.back()}
              className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Regresar
            </button>
          </div>

          {/* Enlaces útiles */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 font-medium">O visita otra de nuestras páginas:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/quienes-somos"
                className="text-pink-600 hover:text-pink-700 font-medium text-sm hover:underline"
              >
                Quiénes Somos
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/programas"
                className="text-pink-600 hover:text-pink-700 font-medium text-sm hover:underline"
              >
                Programas
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/servicios"
                className="text-pink-600 hover:text-pink-700 font-medium text-sm hover:underline"
              >
                Servicios
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/contacto"
                className="text-pink-600 hover:text-pink-700 font-medium text-sm hover:underline"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
