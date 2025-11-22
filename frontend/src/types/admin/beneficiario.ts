// TIPOS DE ENUMS - Deben coincidir con el backend
export type TipoDocumento = 'TI' | 'CC' | 'CE' | 'RC' | 'PASAPORTE'
export type TipoPersona = 'MENOR' | 'TUTOR' | 'JOVEN_ADULTO' | 'DOCENTE' | 'ADMINISTRATIVO' | 'OTRO_PERSONAL'
export type EstadoBeneficiario = 'ACTIVO' | 'INACTIVO'

// INTERFAZ PRINCIPAL - Debe coincidir con la respuesta de la API
export interface Beneficiario {
  id: string
  nombreCompleto: string
  tipoDocumento: TipoDocumento
  numeroDocumento: string
  fechaNacimiento: string  // ISO 8601: "2010-05-15"
  edad: number             // Calculado en el backend
  tipoPersona: TipoPersona
  direccion: string
  barrio?: string
  telefono: string
  email?: string
  foto?: string            // URL de la foto en el servidor
  estado: EstadoBeneficiario
  
  // Campos específicos por tipo
  institucionEducativa?: string
  gradoActual?: string
  tutorId?: string
  tutorNombre?: string     // Populated desde relación
  menoresACargo?: string[]
  especialidad?: string
  cargo?: string
  
  // Relaciones - Populated desde la API
  programasInscritos?: { id: string; nombre: string }[]
  padrinoId?: string
  padrinoNombre?: string
  
  // Metadata
  fechaCreacion: string    // ISO 8601
  fechaActualizacion: string
}

// INTERFAZ PARA FORMULARIOS - Lo que se envía al backend
export interface BeneficiarioFormData {
  nombreCompleto: string
  tipoDocumento: TipoDocumento
  numeroDocumento: string
  fechaNacimiento: string
  tipoPersona: TipoPersona
  direccion: string
  barrio?: string
  telefono: string
  email?: string
  foto?: File              // Se envía como FormData
  estado: EstadoBeneficiario
  institucionEducativa?: string
  gradoActual?: string
  tutorId?: string
  especialidad?: string
  cargo?: string
}

// INTERFAZ PARA RESPUESTA PAGINADA DE LA API
export interface BeneficiariosResponse {
  data: Beneficiario[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
}
