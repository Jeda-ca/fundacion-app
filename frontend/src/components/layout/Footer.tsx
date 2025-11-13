import { IconRenderer } from '../ui'
import { mainNavLinks, redesSociales, politicasLinks, contactoInfo, footerData } from '../../data/navigationData'

export const Footer = () => {
return (
<footer className="bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

      {/* Columna 1: Información de la fundación */}
      <div className="lg:col-span-2 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {footerData.titulo}
          </h3>
          <p className="text-sm text-purple-400 font-medium mb-3">
            {footerData.subtitulo}
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            {footerData.descripcion}
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-3 pt-2">
          {redesSociales.map((red, index) => (
            <a
              key={index}
              href={red.url}
              target={red.nombre !== "Contacto" ? "_blank" : undefined}
              rel={red.nombre !== "Contacto" ? "noopener noreferrer" : undefined}
              className={`w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-300 ${red.hoverColor} hover:text-white transition-all duration-300 hover:scale-110`}
              aria-label={red.nombre}
            >
              {red.nombre === "Contacto" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={red.icono} />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={red.icono} />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Columna 2: Navegación */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4">Navegación</h4>
        <ul className="space-y-2">
          {mainNavLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm"
              >
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Columna 3: Contacto */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
        <ul className="space-y-3">
          {contactoInfo.map((info, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5">
                <IconRenderer tipo={info.icono} />
              </div>
              <span className="text-gray-300 text-sm whitespace-pre-line">
                {info.texto}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Línea divisoria */}
    <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          {footerData.copyright}
        </p>
        
        {/* Links de políticas */}
        <div className="flex gap-6">
          {politicasLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm"
            >
              {link.texto}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
)
}