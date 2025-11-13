// Tipos/interfaces para todo el sitio web:
// Interfaz para los enlaces de navegación
export interface NavLinkItem { 
    id: number
    name: string
    path: string
}

export interface Estadistica {
  number: string;
  label: string;
  sublabel: string;
}

export interface Boton {
  texto: string;
  url: string;
}

export interface HeroData {
  badge: string;
  titulo: {
    linea1: string;
    linea2: string;
  };
  subtitulo: string;
  descripcion: string;
  botones: {
    primario: Boton;
    secundario: Boton;
  };
}

export interface Programa {
  name: string;
  desc: string;
  color: string;
  url: string;
}

export interface Servicio {
  name: string;
  desc?: string;
}

export interface SeccionCompromiso {
  title: string;
  desc: string;
  accent: string;
}

export interface ListaItem {
  texto: string;
}

export interface PracticaEspiritual {
  title: string;
  desc: string;
}

export interface SeccionData {
  etiqueta: string;
  titulo: string;
  descripcion: string;
}

export interface LinkNavegacion {
  texto: string;
  url: string;
}

export interface ContactoInfo {
  icono: string;
  texto: string;
}

export interface RedSocial {
  nombre: string;
  url: string;
  hoverColor: string;
  icono: string; // svg
}

// Tipos específicos para la página "Quiénes Somos":
export interface MisionVisionData {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface ValorData {
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface QuienesSomosHeroData {
  titulo: string
  subtitulo: string;
  descripcion: string;
}

// Tipos específicos para la página de Programas:
export interface ProgramaDetallado {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  objetivos: string[];
  edadTarget: string;
  duracion: string;
  modalidad: string;
  requisitos?: string[];
  beneficios?: string[];
  horario?: { dias: string; horas: string };
  icono: string;
  color: string;
  imagen?: string;
}

export interface ProgramasHeroData {
  titulo: {
    parte1: string;
    parte2: string;
  };
  subtitulo: string;
  descripcion: string;
}

export interface TestimonioData {
  nombre: string;
  edad: number;
  programa: string;
  testimonio: string;
  imagen?: string;
}

export interface ProcesoInscripcionData {
  paso: number;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface HorarioData {
  programa: string;
  dias: string;
  horario: string;
  modalidad: string;
}

// Tipos específicos para la página de Servicios:
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

export interface ServiciosHeroData {
  subtitulo: string
  titulo: string
  descripcion: string
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

// Tipos específicos para la página de Contacto:
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

// Tipos específicos para la página de Donaciones:
export interface DonacionesHeroData {
  subtitulo: string
  titulo: string
  descripcion: string
}

// ============================================================
// INTERFACES DE NAVEGACIÓN Y LINKS
// ============================================================

// Interface para links simples de navegación
export interface NavLink {
id?: string
name?: string
texto: string
path?: string
url: string
externo?: boolean
}

// Para items de dropdown en navbar
export interface NavDropdownItem {
id: string
name?: string
texto: string
path: string
url: string
}

// Para el dropdown completo
export interface NavDropdown {
texto: string
items: NavDropdownItem[]
}

// Para redes sociales (Footer)
export interface RedSocial {
nombre: string
url: string
hoverColor: string
icono: string
}

// Para información de contacto (Footer)
export interface ContactoInfo {
icono: string
texto: string
}