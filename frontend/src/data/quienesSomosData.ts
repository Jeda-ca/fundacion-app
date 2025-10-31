// Todos los datos de la página ¿Quiénes Somos?
import type { 
  QuienesSomosHeroData,
  MisionVisionData,
  HistoriaData,
  TimelineItem,
  ValorData,
  ImpactoData,
  SeccionData
} from '../types';

export const quienesSomosHeroData: QuienesSomosHeroData = {
  titulo: "¿Quiénes Somos?",
  subtitulo: "Una fundación comprometida con el desarrollo integral",
  descripcion: "Desde hace más de 15 años, trabajamos incansablemente para transformar vidas a través del amor, la educación y la sanación pránica, construyendo un futuro lleno de esperanza para las comunidades más vulnerables."
};

export const misionData: MisionVisionData = {
  titulo: "Nuestra Misión",
  descripcion: "Transformar vidas a través de programas educativos, culturales, sociales y espirituales, promoviendo el desarrollo integral de niños, jóvenes y familias en situación de vulnerabilidad, basados en los principios de amor incondicional y sanación pránica.",
  icono: "mision"
};

export const visionData: MisionVisionData = {
  titulo: "Nuestra Visión", 
  descripcion: "Ser reconocidos como una fundación líder en el desarrollo comunitario integral, creando redes de apoyo sostenibles que generen transformaciones duraderas y contribuyan a la construcción de una sociedad más justa, equitativa y espiritualmente consciente.",
  icono: "vision"
};

export const historiaData: HistoriaData = {
  etiqueta: "Nuestra Historia",
  titulo: "Más de una década transformando vidas",
  descripcion: "Nuestro camino comenzó con un sueño: crear un espacio donde el amor y la educación se encontraran para generar cambios profundos en las comunidades. A lo largo de los años, hemos crecido, evolucionado y expandido nuestro impacto.",
  timeline: [
    {
      año: "2009",
      evento: "Fundación Atma Namasté",
      descripcion: "Iniciamos nuestra labor con un pequeño grupo de voluntarios comprometidos con el servicio comunitario."
    },
    {
      año: "2012", 
      evento: "Primeros Programas Educativos",
      descripcion: "Lanzamos nuestros programas de refuerzo escolar y desarrollo artístico en comunidades vulnerables."
    },
    {
      año: "2015",
      evento: "Expansión Internacional",
      descripcion: "Establecemos conexiones con redes internacionales de sanación pránica y desarrollo comunitario."
    },
    {
      año: "2018",
      evento: "500 Familias Beneficiadas",
      descripcion: "Alcanzamos la meta de impactar directamente a 500 familias a través de nuestros programas integrales."
    },
    {
      año: "2021",
      evento: "Programas Digitales",
      descripcion: "Adaptamos nuestros servicios al mundo digital, manteniendo el acompañamiento durante la pandemia."
    },
    {
      año: "2024",
      evento: "Red Global Consolidada", 
      descripcion: "Fortalecemos nuestra presencia con una red de colaboradores nacionales e internacionales."
    }
  ]
};

export const valoresData: SeccionData = {
  etiqueta: "Nuestros Valores",
  titulo: "Los pilares que guían nuestro trabajo",
  descripcion: "Cada acción que emprendemos está fundamentada en principios sólidos que reflejan nuestro compromiso con la transformación integral de las comunidades."
};

export const valores: ValorData[] = [
  {
    nombre: "Amor Incondicional",
    descripcion: "Actuamos desde el corazón, ofreciendo apoyo sin condiciones ni juicios, reconociendo la dignidad inherente de cada persona.",
    icono: "corazon"
  },
  {
    nombre: "Servicio Desinteresado", 
    descripcion: "Nos entregamos completamente al bienestar de otros, poniendo las necesidades comunitarias por encima de intereses personales.",
    icono: "manos"
  },
  {
    nombre: "Integridad",
    descripcion: "Mantenemos coherencia entre nuestros valores, palabras y acciones, siendo transparentes en todos nuestros procesos.",
    icono: "escudo"
  },
  {
    nombre: "Respeto y Inclusión",
    descripcion: "Valoramos la diversidad cultural, religiosa y social, creando espacios seguros donde todos se sienten acogidos.",
    icono: "diversidad"
  },
  {
    nombre: "Crecimiento Continuo",
    descripcion: "Buscamos constantemente la excelencia y el aprendizaje, adaptándonos a las necesidades cambiantes de las comunidades.",
    icono: "crecimiento"
  }
];

export const impactoData: SeccionData = {
  etiqueta: "Nuestro Impacto", 
  titulo: "Transformando realidades, construyendo futuro",
  descripcion: "Los números reflejan solo una parte de nuestro trabajo. Detrás de cada cifra hay historias de transformación, esperanza y crecimiento que nos impulsan a seguir adelante."
};

export const estadisticasImpacto: ImpactoData[] = [
  {
    numero: "1,200+",
    texto: "Niños y jóvenes atendidos",
    descripcion: "En programas educativos y de desarrollo integral"
  },
  {
    numero: "500+", 
    texto: "Familias transformadas",
    descripcion: "A través de acompañamiento directo y sostenido"
  },
  {
    numero: "50+",
    texto: "Profesionales voluntarios",
    descripcion: "Comprometidos con el servicio comunitario"
  },
  {
    numero: "15+",
    texto: "Años de experiencia",
    descripcion: "Construyendo confianza y generando impacto"
  },
  {
    numero: "8",
    texto: "Programas activos", 
    descripcion: "Cubriendo educación, arte, espiritualidad y bienestar"
  },
  {
    numero: "Global",
    texto: "Alcance internacional",
    descripcion: "Red de colaboradores en varios países"
  }
];

export const compromisoFuturoData: SeccionData = {
  etiqueta: "Compromiso con el Futuro",
  titulo: "Construyendo el mañana que soñamos",
  descripcion: "Nuestro compromiso va más allá del presente. Trabajamos cada día pensando en las generaciones futuras, sembrando semillas de transformación que florecerán en los años venideros."
};

export const compromisosLista = [
  "Expandir nuestros programas a más comunidades vulnerables",
  "Fortalecer la red internacional de sanación pránica",
  "Implementar tecnologías educativas innovadoras",
  "Desarrollar programas de liderazgo juvenil",
  "Crear alianzas estratégicas con organizaciones afines",
  "Consolidar un modelo replicable de desarrollo comunitario"
];
