// ============================================================
// TIPOS GENERALES DEL SITIO
// ============================================================

export interface Estadistica {
  number: string
  label: string
  sublabel: string
}

export interface Boton {
  texto: string
  url: string
}

export interface HeroData {
  badge: string
  titulo: {
    linea1: string
    linea2: string
  }
  subtitulo: string
  descripcion: string
  botones: {
    primario: Boton
    secundario: Boton
  }
}

export interface SeccionData {
  etiqueta: string
  titulo: string
  descripcion: string
}

export interface ListaItem {
  texto: string
}

// ============================================================
// NAVEGACIÓN Y LINKS
// ============================================================

// Link simple de navegación (usado en Footer y NavBar)
export interface NavLink {
  id: string
  name: string
  texto: string
  path: string
  url: string
  externo?: boolean
}

// Item de dropdown en navbar (extiende NavLink)
export interface NavDropdownItem extends NavLink {
  // Hereda: id, name, texto, path, url, externo
}

// Dropdown completo
export interface NavDropdown {
  texto: string
  items: NavDropdownItem[]
}

// ============================================================
// REDES SOCIALES Y CONTACTO
// ============================================================

export interface RedSocial {
  nombre: string
  url: string
  hoverColor: string
  icono: string // SVG path
}

export interface ContactoInfo {
  icono: string
  texto: string
}

// ============================================================
// PÁGINA: INICIO
// ============================================================

export interface Programa {
  name: string
  desc: string
  color: string
  url: string
}

export interface Servicio {
  name: string
  desc?: string
}

export interface SeccionCompromiso {
  title: string
  desc: string
  accent: string
}

export interface PracticaEspiritual {
  title: string
  desc: string
}

// ============================================================
// PÁGINA: QUIÉNES SOMOS
// ============================================================

export interface QuienesSomosHeroData {
  titulo: string
  subtitulo: string
  descripcion: string
}

export interface MisionVisionData {
  titulo: string
  descripcion: string
  icono: string
}

export interface ValorData {
  nombre: string
  descripcion: string
  icono: string
}

// ============================================================
// PÁGINA: PROGRAMAS
// ============================================================

export interface ProgramasHeroData {
  titulo: string
  descripcion: string
}

export interface ProgramaDetallado {
  id: string
  nombre: string
  descripcion: string
  descripcionLarga: string
  objetivos: string[]
  edadTarget: string
  duracion: string
  modalidad: string
  requisitos?: string[]
  beneficios?: string[]
  horario?: { dias: string; horas: string }
  icono: string
  color: string
  imagen?: string
}

export interface HorarioData {
  programa: string
  dias: string
  horario: string
  modalidad: string
}

// ============================================================
// PÁGINA: SERVICIOS
// ============================================================

export interface ServiciosHeroData {
  subtitulo: string
  titulo: string
  descripcion: string
}

export interface ServicioItem {
  id: string
  titulo: string
  descripcion: string
  icono?: string
  destacado?: boolean
}

export interface CategoriaServicios {
  etiqueta: string
  titulo: string
  descripcion?: string
  servicios: ServicioItem[]
}

export interface ServicioDetallado {
  id: string
  titulo: string
  descripcionCorta: string
  descripcionCompleta: string
  icono?: string
  color: 'pink' | 'purple' | 'orange'
  queIncluye: string[]
}

// ============================================================
// PÁGINA: CONTACTO
// ============================================================

export interface ContactoHeroData {
  subtitulo: string
  titulo: string
  descripcion: string
}

export interface InformacionContacto {
  correo: string
  telefonoPrincipal: string
  direccion: string
  whatsapp: string
}

export interface DatosContacto {
  informacionGeneral: InformacionContacto
  whatsappGeneral: {
    texto: string
    mensaje: string
  }
}

// ============================================================
// PÁGINA: DONACIONES
// ============================================================

export interface DonacionesHeroData {
  subtitulo: string
  titulo: string
  descripcion: string
}
