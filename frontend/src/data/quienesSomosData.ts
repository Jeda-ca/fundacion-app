// Todos los datos de la página ¿Quiénes Somos?
import type { 
  QuienesSomosHeroData,
  MisionVisionData,
  ValorData,
  SeccionData
} from '../types'

export const quienesSomosHeroData: QuienesSomosHeroData = {
  titulo: "¿Quiénes Somos?",
  subtitulo: "Una fundación comprometida con el desarrollo integral",
  descripcion: "Desde hace más de 15 años, trabajamos incansablemente para transformar vidas a través del amor, la educación y la sanación pránica, construyendo un futuro lleno de esperanza para las comunidades más vulnerables."
}

export const misionData: MisionVisionData = {
  titulo: "Nuestra Misión",
  descripcion: "Transformar vidas a través de programas educativos, culturales, sociales y espirituales, promoviendo el desarrollo integral de niños, jóvenes y familias en situación de vulnerabilidad, basados en los principios de amor incondicional y sanación pránica.",
  icono: "mision"
}

export const visionData: MisionVisionData = {
  titulo: "Nuestra Visión", 
  descripcion: "Ser reconocidos como una fundación líder en el desarrollo comunitario integral, creando redes de apoyo sostenibles que generen transformaciones duraderas y contribuyan a la construcción de una sociedad más justa, equitativa y espiritualmente consciente.",
  icono: "vision"
}

export const valoresData: SeccionData = {
  etiqueta: "Nuestros Valores",
  titulo: "Los pilares que guían nuestro trabajo",
  descripcion: "Cada acción que emprendemos está fundamentada en principios sólidos que reflejan nuestro compromiso con la transformación integral de las comunidades."
}

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
]

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
]