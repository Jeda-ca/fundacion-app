import type { ContactoHeroData, InformacionContacto, DatosContacto } from '../types/index'

export const contactoHeroData: ContactoHeroData = {
  subtitulo: 'Ponte en contacto',
  titulo: 'Contáctanos',
  descripcion: '¡Nos encantaría saber de ti! Escríbenos o visítanos.'
}

export const datosContacto: DatosContacto = {
  informacionGeneral: {
    correo: 'contacto@fundacionatmannamaste.org',
    telefonoPrincipal: '+57 300 123 4567',
    direccion: 'Calle 15 #12-34, Centro',
    whatsapp: '+57 300 123 4567'
  },
  whatsappGeneral: {
    texto: 'Chatea con Nosotros',
    mensaje: 'Hola, me interesa conocer más sobre la Fundación Atma Namasté y sus programas. ¿Podrían darme más información?'
  }
}
