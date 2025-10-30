import { quienesSomosData } from '../data/quienesSomosData';

// --- COMPONENTE DE ICONOS SVG ---
// Definimos los SVG aquí mismo para no instalar dependencias
// Este componente renderizará el SVG correcto basado en el string del archivo de datos
const ValorIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const iconProps = {
    className: className || 'w-full h-full',
    strokeWidth: 1.5,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'aria-hidden': true,
  };

  switch (iconName) {
    case 'heart':
      return (
        <svg {...iconProps}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'gem':
      return (
        <svg {...iconProps}>
          <path d="M6 3h12l4 6-10 12L2 9l4-6z M12 3v18" />
        </svg>
      );
    case 'users':
      return (
        <svg {...iconProps}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'target':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...iconProps}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
const QuienesSomos = () => {
  const { header, historia, misionVision, valores, equipo } = quienesSomosData;

  // Definimos los colores aquí usando valores arbitrarios de Tailwind
  // Esto evita tener que modificar tailwind.config.js
  const valorColorClasses = {
    pink: {
      bg: 'bg-[#E297C2]/20', // Rosa con 20% opacidad
      text: 'text-[#E297C2]',
    },
    orange: {
      bg: 'bg-[#F38840]/20', // Naranja con 20% opacidad
      text: 'text-[#F38840]',
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- SECCIÓN HERO --- */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src={header.imageUrl}
          alt="Imagen principal de la fundación"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* --- TÍTULO Y DESCRIPCIÓN --- */}
      <section className="py-16 bg-white shadow-sm">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {header.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            {header.description}
          </p>
        </div>
      </section>

      {/* --- SECCIÓN HISTORIA (ZIGZAG) --- */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#E297C2]/10 to-[#F38840]/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          {historia.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300 ease-in-out hover:scale-[1.02] ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Imagen */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
                />
              </div>
              {/* Texto */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN MISIÓN Y VISIÓN --- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Misión */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold text-[#E297C2] mb-4">
                {misionVision.mision.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {misionVision.mision.text}
              </p>
            </div>
            {/* Visión */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold text-[#F38840] mb-4">
                {misionVision.vision.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {misionVision.vision.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VALORES --- */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {valores.map((valor) => (
              <div key={valor.title} className="text-center">
                <div
                  className={`w-20 h-20 p-5 rounded-full mx-auto flex items-center justify-center ${
                    valorColorClasses[valor.colorClass].bg
                  }`}
                >
                  <ValorIcon
                    iconName={valor.icon}
                    className={`w-full h-full ${
                      valorColorClasses[valor.colorClass].text
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                  {valor.title}
                </h3>
                <p className="text-gray-600 px-2">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN EQUIPO --- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {equipo.map((miembro) => (
              <div key={miembro.name}>
                <img
                  src={miembro.imageUrl}
                  alt={miembro.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover shadow-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {miembro.name}
                </h3>
                <p className="text-sm text-[#F38840] font-medium">
                  {miembro.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;