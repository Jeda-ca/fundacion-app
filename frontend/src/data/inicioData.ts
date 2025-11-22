// Todos los datos del contenido de la página de inicio
import type { 
  HeroData, 
  Estadistica, 
  SeccionData, 
  ListaItem,
  Programa, 
  SeccionCompromiso,
  PracticaEspiritual,
  Servicio
} from '../types'

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
}

export const estadisticas: Estadistica[] = [
  { 
    number: "15+", 
    label: "Años de servicio", 
    sublabel: "Experiencia comprobada" 
  },
  { 
    number: "200+", 
    label: "Familias beneficiadas", 
    sublabel: "Impacto directo" 
  },
  { 
    number: "Global", 
    label: "Alcance mundial", 
    sublabel: "Presencia internacional" 
  }
]

export const queHacemosData: SeccionData = {
  etiqueta: "¿Qué hacemos?",
  titulo: "Impulsamos el desarrollo integral de comunidades",
  descripcion: "A través de programas educativos, culturales, sociales y espirituales, acompañamos a niños, jóvenes y familias en su crecimiento personal y comunitario."
}

export const queHacemosLista: ListaItem[] = [
  { texto: "Educación integral y refuerzo académico" },
  { texto: "Desarrollo artístico y cultural" },
  { texto: "Bienestar espiritual y sanación pránica" },
  { texto: "Apoyo social y nutricional" }
]

export const compromisoSocialData: SeccionData = {
  etiqueta: "Compromiso Social",
  titulo: "Construyendo un mundo más solidario",
  descripcion: "Trabajamos con comunidades de Colombia y el mundo, promoviendo solidaridad, equidad y oportunidades con un enfoque profundamente humano y espiritual."
}

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
]

export const programasData: SeccionData = {
  etiqueta: "Nuestros Programas",
  titulo: "Educación que transforma vidas",
  descripcion: "Desde refuerzo escolar hasta artes y meditación, nuestros programas abrazan todas las dimensiones del desarrollo humano integral."
}

export const programas: Programa[] = [
  { 
    name: "Programa de Mercados", 
    desc: "Apoyo alimentario mensual para familias", 
    color: "border-pink-200 hover:border-pink-400",
    url: "/programas#programa-mercados"
  },
  { 
    name: "Refuerzo Escolar", 
    desc: "Apoyo académico personalizado para niños y jóvenes", 
    color: "border-blue-200 hover:border-blue-400",
    url: "/programas#refuerzo-escolar"
  },
  { 
    name: "Artes Plásticas/Pintura", 
    desc: "Expresión creativa y desarrollo artístico integral", 
    color: "border-pink-200 hover:border-pink-400",
    url: "/programas#artes-plasticas-pintura"
  },
  { 
    name: "Danza", 
    desc: "Movimiento, ritmo y expresión cultural", 
    color: "border-purple-200 hover:border-purple-400",
    url: "/programas#danza"
  },
  { 
    name: "Escuela de Iniciación Musical", 
    desc: "Educación musical desde los primeros años", 
    color: "border-orange-200 hover:border-orange-400",
    url: "/programas#escuela-iniciacion-musical"
  },
  { 
    name: "Becas Estudiantiles y Profesionales (BESPRO)", 
    desc: "Desarrollo de habilidades y acceso a oportunidades", 
    color: "border-indigo-200 hover:border-indigo-400",
    url: "/programas#bespro"
  },
  { 
    name: "Programa de Meditación", 
    desc: "Prácticas para paz interior y bienestar", 
    color: "border-purple-200 hover:border-purple-400",
    url: "/programas#programa-meditacion"
  },
  { 
    name: "Apadrinamiento", 
    desc: "Apoyo directo y personalizado a familias", 
    color: "border-pink-200 hover:border-pink-400",
    url: "/programas#apadrinamiento"
  }
]

export const espiritualidadData: SeccionData = {
  etiqueta: "Espiritualidad & Sanación",
  titulo: "Inspirados en las enseñanzas de G.M.C.K.S",
  descripcion: "Promovemos prácticas de meditación y sanación pránica para el bienestar físico, emocional y espiritual. Un camino de transformación interior que irradia hacia la comunidad."
}

export const practicasEspirituales: PracticaEspiritual[] = [
  { title: "Meditación", desc: "Paz interior y claridad mental" },
  { title: "Sanación", desc: "Bienestar integral del ser" },
  { title: "Servicio", desc: "Amor en acción hacia otros" }
]

export const serviciosData: SeccionData = {
  etiqueta: "Nuestros Servicios",
  titulo: "Profesionales al servicio de la comunidad",
  descripcion: "Campañas especializadas con profesionales comprometidos con el bienestar integral de nuestras comunidades."
}

export const servicios: Servicio[] = [
  { name: "Campañas de Salud" },
  { name: "Jornadas Deportivas" },
  { name: "Actividades Espirituales" },
  { name: "Eventos Recreativos" }
]