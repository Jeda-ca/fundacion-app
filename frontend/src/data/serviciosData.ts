// Todos los datos de la página de Servicios
import type { ServiciosHeroData, CategoriaServicios } from '../types/index'

export const serviciosHeroData: ServiciosHeroData = {
  subtitulo: 'Lo que hacemos',
  titulo: 'Servicios y líneas de acción',
  descripcion: 'Acompañamos a comunidades con programas educativos, culturales, espirituales y de apoyo social. Servimos con amor, excelencia y enfoque humano.'
}

export const categoriasServicios: CategoriaServicios[] = [
  {
    etiqueta: 'Educación y Desarrollo',
    titulo: 'Programas Formativos',
    descripcion: 'Procesos continuos para potenciar habilidades, cerrar brechas y abrir oportunidades.',
    servicios: [
      {
        id: 'refuerzo-escolar',
        titulo: 'Refuerzo escolar',
        descripcion: 'Acompañamiento académico para niños y jóvenes con metodologías activas.',
        icono: 'libro',
        destacado: true
      },
      {
        id: 'liderazgo-juvenil',
        titulo: 'Liderazgo juvenil',
        descripcion: 'Procesos de liderazgo, comunicación y proyectos con impacto comunitario.',
        icono: 'estrella'
      },
      {
        id: 'becas-bespro',
        titulo: 'Becas BESPRO',
        descripcion: 'Apoyo económico para estudios técnicos, universitarios o de formación profesional.',
        icono: 'medalla'
      }
    ]
  },
  {
    etiqueta: 'Arte y Cultura',
    titulo: 'Expresión y Creatividad',
    descripcion: 'Lenguajes artísticos para sanar, construir identidad y fortalecer vínculos.',
    servicios: [
      {
        id: 'artes-plasticas',
        titulo: 'Artes plásticas y pintura',
        descripcion: 'Exploración de técnicas y procesos creativos para niños, jóvenes y adultos.',
        icono: 'paleta'
      },
      {
        id: 'danza',
        titulo: 'Danza',
        descripcion: 'Espacios de movimiento, ritmo y trabajo corporal para el bienestar.',
        icono: 'nota'
      },
      {
        id: 'iniciacion-musical',
        titulo: 'Escuela de iniciación musical',
        descripcion: 'Fundamentos musicales, instrumentos y ensambles cooperativos.',
        icono: 'musica'
      }
    ]
  },
  {
    etiqueta: 'Bienestar y Espiritualidad',
    titulo: 'Cuidado Integral',
    descripcion: 'Prácticas para armonizar cuerpo, mente y espíritu con enfoque compasivo.',
    servicios: [
      {
        id: 'meditacion',
        titulo: 'Programa de meditación',
        descripcion: 'Prácticas guiadas, respiración y atención plena para todas las edades.',
        icono: 'loto',
        destacado: true
      },
      {
        id: 'sanacion-pranica',
        titulo: 'Orientación en sanación pránica',
        descripcion: 'Acompañamiento básico y derivación a facilitadores certificados.',
        icono: 'energia'
      }
    ]
  },
  {
    etiqueta: 'Apoyo Social',
    titulo: 'Cuidado y Solidaridad',
    descripcion: 'Acciones solidarias que atienden necesidades concretas y urgentes.',
    servicios: [
      {
        id: 'mercados',
        titulo: 'Entrega de mercados',
        descripcion: 'Apoyo alimentario a familias priorizadas con seguimiento responsable.',
        icono: 'canasta',
        destacado: true
      },
      {
        id: 'utiles-escolares',
        titulo: 'Útiles escolares',
        descripcion: 'Dotaciones para permanencia escolar y reducción de barreras.',
        icono: 'mochila'
      },
      {
        id: 'apoyo-puntual',
        titulo: 'Apoyo puntual',
        descripcion: 'Respuestas a casos específicos: matrículas, medicamentos u otras necesidades.',
        icono: 'corazon'
      }
    ]
  }
]
