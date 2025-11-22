import type { ServiciosHeroData, ServicioDetallado } from '../types/index'

export const serviciosHeroData: ServiciosHeroData = {
  subtitulo: 'Lo que hacemos por la comunidad',
  titulo: 'Nuestros servicios',
  descripcion: 'Organizamos jornadas que conectan a las familias con oportunidades de bienestar, crecimiento y alegría. Cada actividad nace del corazón y está pensada para generar encuentros significativos.'
}

export const serviciosLista: ServicioDetallado[] = [
  {
    id: 'jornadas-salud',
    titulo: 'Jornadas de Salud',
    descripcionCorta: 'Cuidamos el bienestar físico de nuestra comunidad',
    descripcionCompleta: 'Organizamos jornadas médicas donde doctores, enfermeras y especialistas voluntarios ofrecen consultas gratuitas, chequeos preventivos y orientación en salud. También incluimos charlas sobre nutrición, higiene y cuidado personal. Es hermoso ver cómo las familias se acercan con confianza y se van con herramientas para cuidar mejor su salud.',
    icono: 'salud',
    color: 'pink',
    queIncluye: [
      'Consultas médicas generales',
      'Control de signos vitales', 
      'Orientación nutricional',
      'Entrega de medicamentos básicos',
      'Charlas de prevención',
      'Remisiones especializadas'
    ]
  },
  {
    id: 'jornadas-deportivas',
    titulo: 'Jornadas Deportivas',
    descripcionCorta: 'Fomentamos la actividad física y la sana competencia',
    descripcionCompleta: 'Creamos espacios donde niños, jóvenes y adultos pueden disfrutar del deporte como herramienta de integración social. Organizamos torneos de fútbol, voleibol, atletismo y juegos tradicionales. Lo más lindo es ver cómo se forman equipos, se hacen amistades y las familias enteras se involucran apoyando y celebrando juntas.',
    icono: 'deporte',
    color: 'purple',
    queIncluye: [
      'Torneos de fútbol comunitarios',
      'Competencias de voleibol',
      'Carreras y atletismo',
      'Juegos tradicionales',
      'Actividades familiares',
      'Premiación y reconocimientos'
    ]
  },
  {
    id: 'jornadas-recreativas-espirituales',
    titulo: 'Jornadas Recreativas y Espirituales',
    descripcionCorta: 'Espacios de crecimiento espiritual y conexión interior',
    descripcionCompleta: 'Estas jornadas son encuentros especiales donde combinamos actividades recreativas con prácticas espirituales adaptadas para toda la familia. Incluyen meditaciones guiadas, ejercicios de respiración, dinámicas de autoconocimiento y momentos de reflexión. Vemos cómo las personas encuentran paz interior y herramientas para manejar el estrés de la vida diaria.',
    icono: 'loto',
    color: 'orange',
    queIncluye: [
      'Meditaciones familiares guiadas',
      'Ejercicios de respiración',
      'Dinámicas de autoconocimiento',
      'Círculos de reflexión',
      'Actividades lúdicas conscientes',
      'Técnicas de relajación'
    ]
  }
]
