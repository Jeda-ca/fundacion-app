import { IconRenderer } from '../ui'
import {
  footerData,
  navegacionLinks,
  contactoInfo,
  redesSociales,
  politicasLinks
} from '../../data/inicioData'

// Footer global de la aplicación
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Footer principal */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Información principal */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2">{footerData.titulo}</h3>
                <p className="text-sky-400 font-medium text-sm lg:text-base">{footerData.subtitulo}</p>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md text-sm lg:text-base">
                {footerData.descripcion}
              </p>
              <div className="flex items-center gap-3 lg:gap-4">
                {redesSociales.map((red, index) => (
                  <a 
                    key={index}
                    href={red.url} 
                    target={red.url.startsWith('http') ? "_blank" : "_self"}
                    rel={red.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`size-9 lg:size-10 bg-gray-800 rounded-lg flex items-center justify-center ${red.hoverColor} transition-colors duration-300`}
                  >
                    <svg className="size-4 lg:size-5" fill={red.nombre === 'Contacto' ? "none" : "currentColor"} stroke={red.nombre === 'Contacto' ? "currentColor" : "none"} viewBox="0 0 24 24">
                      <path strokeLinecap={red.nombre === 'Contacto' ? "round" : undefined} strokeLinejoin={red.nombre === 'Contacto' ? "round" : undefined} strokeWidth={red.nombre === 'Contacto' ? 2 : undefined} d={red.icono}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Navegación</h4>
            <ul className="space-y-2 lg:space-y-3">
              {navegacionLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base">
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Contacto</h4>
            <ul className="space-y-2 lg:space-y-3 text-gray-300">
              {contactoInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IconRenderer tipo={info.icono} className="size-4 lg:size-5 mt-0.5 flex-shrink-0" />
                  <span style={{whiteSpace: 'pre-line'}} className="text-sm lg:text-base">{info.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="py-6 lg:py-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 lg:gap-4">
          <p className="text-gray-400 text-xs lg:text-sm text-center sm:text-left">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm">
            {politicasLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors duration-300">
                {link.texto}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}