// Todos los datos del contenido de la página de inicio

import type { 
  HeroData, 
  Estadistica, 
  SeccionData, 
  ListaItem,
  Programa, 
  SeccionCompromiso,
  PracticaEspiritual,
  Servicio,
  LinkNavegacion,
  ContactoInfo,
  RedSocial
} from '../types';

export const heroData: HeroData = {
  badge: "Fundación sin ánimo de lucro",
  titulo: {
    linea1: "Fundación",
    linea2: "Atma Namasté"
  },
  subtitulo: "sanación pránica G.M.C.K.S",
  descripcion: "Transformamos vidas a través del amor, la educación integral y la sanación pránica, acompañando a familias en su crecimiento espiritual y social.",
  botones: {
    primario: {
      texto: "Conocer Programas",
      url: "/programas"
    },
    secundario: {
      texto: "Contáctanos", 
      url: "/contacto"
    }
  }
};

export const estadisticas: Estadistica[] = [
  { 
    number: "15+", 
    label: "Años de servicio", 
    sublabel: "Experiencia comprobada" 
  },
  { 
    number: "500+", 
    label: "Familias beneficiadas", 
    sublabel: "Impacto directo" 
  },
  { 
    number: "Global", 
    label: "Alcance mundial", 
    sublabel: "Presencia internacional" 
  }
];

export const queHacemosData: SeccionData = {
  etiqueta: "¿Qué hacemos?",
  titulo: "Impulsamos el desarrollo integral de comunidades",
  descripcion: "A través de programas educativos, culturales, sociales y espirituales, acompañamos a niños, jóvenes y familias en su crecimiento personal y comunitario."
};

export const queHacemosLista: ListaItem[] = [
  { texto: "Educación integral y refuerzo académico" },
  { texto: "Desarrollo artístico y cultural" },
  { texto: "Bienestar espiritual y sanación pránica" },
  { texto: "Apoyo social y nutricional" }
];

export const compromisoSocialData: SeccionData = {
  etiqueta: "Compromiso Social",
  titulo: "Construyendo un mundo más solidario",
  descripcion: "Trabajamos con comunidades de Colombia y el mundo, promoviendo solidaridad, equidad y oportunidades con un enfoque profundamente humano y espiritual."
};

export const compromisoSocialItems: SeccionCompromiso[] = [
  { 
    title: "Nacional", 
    desc: "Presencia activa en Colombia con programas locales que responden a las necesidades específicas de cada comunidad.",
    accent: "bg-pink-500"
  },
  { 
    title: "Internacional", 
    desc: "Red global de colaboradores que comparten conocimientos y metodologías de sanación pránica.",
    accent: "bg-orange-500"
  },
  { 
    title: "Comunitario", 
    desc: "Trabajo directo con familias para crear transformaciones duraderas desde la raíz.",
    accent: "bg-purple-500"
  }
];

export const programasData: SeccionData = {
  etiqueta: "Nuestros Programas",
  titulo: "Educación que transforma vidas",
  descripcion: "Desde refuerzo escolar hasta artes y meditación, nuestros programas abrazan todas las dimensiones del desarrollo humano integral."
};

export const programas: Programa[] = [
  { 
    name: "Refuerzo Escolar", 
    desc: "Apoyo académico personalizado para niños y jóvenes", 
    color: "border-blue-200 hover:border-blue-400" 
  },
  { 
    name: "Artes & Pintura", 
    desc: "Expresión creativa y desarrollo artístico integral", 
    color: "border-pink-200 hover:border-pink-400" 
  },
  { 
    name: "Danza", 
    desc: "Movimiento, ritmo y expresión cultural", 
    color: "border-purple-200 hover:border-purple-400" 
  },
  { 
    name: "Iniciación Musical", 
    desc: "Educación musical desde los primeros años", 
    color: "border-orange-200 hover:border-orange-400" 
  },
  { 
    name: "Apadrinamiento", 
    desc: "Apoyo directo y personalizado a familias", 
    color: "border-green-200 hover:border-green-400" 
  },
  { 
    name: "BESPRO", 
    desc: "Desarrollo de habilidades para la vida", 
    color: "border-indigo-200 hover:border-indigo-400" 
  }
];

export const espiritualidadData: SeccionData = {
  etiqueta: "Espiritualidad & Sanación",
  titulo: "Inspirados en las enseñanzas de G.M.C.K.S",
  descripcion: "Promovemos prácticas de meditación y sanación pránica para el bienestar físico, emocional y espiritual. Un camino de transformación interior que irradia hacia la comunidad."
};

export const practicasEspirituales: PracticaEspiritual[] = [
  { title: "Meditación", desc: "Paz interior y claridad mental" },
  { title: "Sanación", desc: "Bienestar integral del ser" },
  { title: "Servicio", desc: "Amor en acción hacia otros" }
];

export const serviciosData: SeccionData = {
  etiqueta: "Nuestros Servicios",
  titulo: "Profesionales al servicio de la comunidad",
  descripcion: "Campañas especializadas con profesionales comprometidos con el bienestar integral de nuestras comunidades."
};

export const servicios: Servicio[] = [
  { name: "Campañas de Salud" },
  { name: "Jornadas Deportivas" },
  { name: "Actividades Espirituales" },
  { name: "Eventos Recreativos" }
];

export const footerData = {
  titulo: "Fundación Atma Namasté",
  subtitulo: "Sanación pránica G.M.C.K.S",
  descripcion: "Transformamos vidas a través del amor, la educación integral y la sanación pránica, acompañando a familias en su crecimiento espiritual y social.",
  copyright: "© 2025 Fundación Atma Namasté. Todos los derechos reservados."
};

export const navegacionLinks: LinkNavegacion[] = [
  { texto: "Inicio", url: "/" },
  { texto: "¿Quiénes somos?", url: "/quienes-somos" },
  { texto: "Programas", url: "/programas" },
  { texto: "Servicios", url: "/servicios" },
  { texto: "Contáctanos", url: "/contacto" }
];

export const contactoInfo: ContactoInfo[] = [
  { 
    icono: "ubicacion",
    texto: "Valledupar, César\nColombia"
  },
  { 
    icono: "email", 
    texto: "info@atmanamaste.org"
  },
  { 
    icono: "telefono",
    texto: "+57 300 123 4567"
  }
];

export const redesSociales: RedSocial[] = [
  {
    nombre: "Facebook",
    url: "https://facebook.com/fundacionatmanamaste",
    hoverColor: "hover:bg-blue-600",
    icono: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  },
  {
    nombre: "Instagram", 
    url: "https://instagram.com/fundacionatmanamaste",
    hoverColor: "hover:bg-pink-600",
    icono: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    nombre: "Contacto",
    url: "/contacto", 
    hoverColor: "hover:bg-pink-600",
    icono: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }
];

export const politicasLinks: LinkNavegacion[] = [
  { texto: "Políticas de Privacidad", url: "/politicas" },
  { texto: "Términos de Uso", url: "/terminos" }
];
