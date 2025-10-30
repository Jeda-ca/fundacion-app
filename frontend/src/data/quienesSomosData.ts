// --- INTERFACES DE DATOS ---
interface HeaderData {
  title: string;
  description: string;
  imageUrl: string;
}

interface HistoriaItem {
  title: string;
  description: string;
  imageUrl: string;
}

interface MisionVisionData {
  mision: {
    title: string;
    text: string;
  };
  vision: {
    title: string;
    text: string;
  };
}

interface ValorItem {
  // Cambiado de LucideIcon a un string simple para identificar el ícono
  icon: 'heart' | 'gem' | 'users' | 'target' | 'shield' | 'eye';
  title: string;
  description: string;
  colorClass: 'pink' | 'orange';
}

interface EquipoMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface QuienesSomosData {
  header: HeaderData;
  historia: HistoriaItem[];
  misionVision: MisionVisionData;
  valores: ValorItem[];
  equipo: EquipoMember[];
}

// --- CONTENIDO DE LA PÁGINA ---
export const quienesSomosData: QuienesSomosData = {
  header: {
    title: '¿Quiénes somos?',
    description:
      'Somos una organización sin fines de lucro dedicada a transformar vidas y fortalecer comunidades a través de programas educativos, sociales y de desarrollo integral.',
    imageUrl: 'https://placehold.co/1200x400/E297C2/white?text=Imagen+Fundacion&font=inter',
  },
  historia: [
    {
      title: 'Nuestro Comienzo',
      description:
        'Fundada en [Año], nuestra organización nació del sueño de [Nombre del Fundador] de crear un espacio seguro y enriquecedor para los niños y jóvenes de [Ciudad/Región]. Comenzamos con un pequeño grupo de voluntarios y un gran corazón.',
      imageUrl: 'https://placehold.co/600x400/f38840/white?text=Hito+1&font=inter',
    },
    {
      title: 'Crecimiento y Expansión',
      description:
        'Gracias al apoyo de la comunidad y la dedicación de nuestro equipo, expandimos nuestros programas para incluir [Programa Clave 1] y [Programa Clave 2]. Abrimos nuevas sedes y duplicamos el número de beneficiarios en solo [X] años.',
      imageUrl: 'https://placehold.co/600x400/e297c2/white?text=Hito+2&font=inter',
    },
    {
      title: 'Impacto Actual',
      description:
        'Hoy, servimos a más de [Número] personas anualmente, ofreciendo un ecosistema de apoyo que abarca desde la educación inicial hasta la capacitación para el empleo. Seguimos comprometidos con nuestra misión original, adaptándonos a los nuevos desafíos.',
      imageUrl: 'https://placehold.co/600x400/f38840/white?text=Hito+3&font=inter',
    },
  ],
  misionVision: {
    mision: {
      title: 'Nuestra Misión',
      text: 'Proporcionar herramientas, oportunidades y apoyo integral a individuos y familias en situación de vulnerabilidad, fomentando su desarrollo personal, educativo y social para que alcancen su máximo potencial y contribuyan positivamente a la sociedad.',
    },
    vision: {
      title: 'Nuestra Visión',
      text: 'Ser una organización líder y referente en la transformación social, reconocida por nuestro impacto sostenible, la transparencia en nuestra gestión y la capacidad de inspirar a una sociedad más justa, equitativa y solidaria para todos.',
    },
  },
  valores: [
    {
      icon: 'heart', // Ícono actualizado a string
      title: 'Compromiso',
      description: 'Actuamos con pasión y dedicación total hacia nuestra misión y beneficiarios.',
      colorClass: 'pink',
    },
    {
      icon: 'gem', // Ícono actualizado a string
      title: 'Integridad',
      description: 'Trabajamos con transparencia, honestidad y ética en todas nuestras acciones.',
      colorClass: 'orange',
    },
    {
      icon: 'users', // Ícono actualizado a string
      title: 'Empatía',
      description: 'Escuchamos y nos conectamos genuinamente con las realidades de quienes servimos.',
      colorClass: 'pink',
    },
    {
      icon: 'target', // Ícono actualizado a string
      title: 'Excelencia',
      description: 'Buscamos la mejora continua y la calidad en cada programa y servicio que ofrecemos.',
      colorClass: 'orange',
    },
    {
      icon: 'shield', // Ícono actualizado a string
      title: 'Respeto',
      description: 'Valoramos la dignidad y diversidad de cada persona, promoviendo la inclusión.',
      colorClass: 'pink',
    },
    {
      icon: 'eye', // Ícono actualizado a string
      title: 'Innovación',
      description: 'Somos creativos y proactivos en la búsqueda de soluciones efectivas y sostenibles.',
      colorClass: 'orange',
    },
  ],
  equipo: [
    {
      name: '[Nombre Apellido]',
      role: 'Director/a Ejecutivo/a',
      imageUrl: 'https://placehold.co/400x400/E297C2/white?text=Avatar&font=inter',
    },
    {
      name: '[Nombre Apellido]',
      role: 'Coordinador/a de Programas',
      imageUrl: 'https://placehold.co/400x400/F38840/white?text=Avatar&font=inter',
    },
    {
      name: '[Nombre Apellido]',
      role: 'Coordinador/a de Finanzas',
      imageUrl: 'https://placehold.co/400x400/E297C2/white?text=Avatar&font=inter',
    },
    {
      name: '[Nombre Apellido]',
      role: 'Trabajador/a Social',
      imageUrl: 'https://placehold.co/400x400/F38840/white?text=Avatar&font=inter',
    },
    {
      name: '[Nombre Apellido]',
      role: 'Psicólogo/a',
      imageUrl: 'https://placehold.co/400x400/E297C2/white?text=Avatar&font=inter',
    },
    {
      name: '[Nombre Apellido]',
      role: 'Líder de Voluntariado',
      imageUrl: 'https://placehold.co/400x400/F38840/white?text=Avatar&font=inter',
    },
  ],
};