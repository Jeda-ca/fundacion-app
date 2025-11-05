import type { ContactoHeroData, DatosContacto } from '../types/index'

export const contactoHeroData: ContactoHeroData = {
  subtitulo: 'Ponte en contacto',
  titulo: 'Conectemos',
  descripcion: '¡Nos encantaría saber de ti! Escríbenos o visítanos.'
}

export const datosContacto: DatosContacto = {
  informacionGeneral: {
    correo: 'contacto@fundacionatmannamaste.org',
    telefonoPrincipal: '+57 300 123 4567',
    direccion: 'Calle 15 #12-34, Centro, Valledupar, César',
    whatsapp: '+57 300 123 4567'
  },
  equipo: [
    {
      nombre: 'Jesús Carvajal',
      telefono: '+57 304 343 0868',
      area: 'Dirección General'
    },
    {
      nombre: 'María García',
      telefono: '+57 304 297 4189',
      area: 'Coordinación de Programas'
    },
    {
      nombre: 'Andrés Zapata',
      telefono: '+57 313 656 9828',
      area: 'Apoyo Social'
    },
    {
      nombre: 'Marlon Martínez',
      telefono: '+57 319 654 8831',
      area: 'Proyectos Especiales'
    },
    {
      nombre: 'Lorena',
      telefono: '+57 311 525 5211',
      area: 'Administración'
    }
  ],
  whatsappGeneral: 'Chatea con Nosotras'
}
