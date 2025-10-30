// Tipos para toda la aplicación

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
  icono: string; // SVG path
}

// Agregar estos tipos a los existentes:

export interface MisionVisionData {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface HistoriaData {
  etiqueta: string;
  titulo: string;
  descripcion: string;
  timeline: TimelineItem[];
}

export interface TimelineItem {
  año: string;
  evento: string;
  descripcion: string;
}

export interface ValorData {
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface ImpactoData {
  numero: string;
  texto: string;
  descripcion: string;
}

export interface QuienesSomosHeroData {
  titulo: string
  subtitulo: string;
  descripcion: string;
}
