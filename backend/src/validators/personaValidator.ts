import { z } from 'zod';
import { TipoDocumento, Genero, TipoPersona, EstadoGeneral} from '@prisma/client';

// SCHEMA BASE 
const personaBaseComunSchema = z.object({
  // --- Identificación ---
  tipoDocumento: z.nativeEnum(TipoDocumento),
  numeroDocumento: z
    .string()
    .min(1, 'El número de documento es requerido')
    .min(5, 'El número de documento debe tener al menos 5 caracteres')
    .max(20, 'El número de documento no puede exceder 20 caracteres')
    .regex(/^[A-Z0-9-]+$/, 'Solo letras mayúsculas, números y guiones'),

  // --- Nombres ---
  primerNombre: z
    .string()
    .min(2, 'El primer nombre debe tener al menos 2 caracteres')
    .max(50, 'El primer nombre no puede exceder 50 caracteres'),
  segundoNombre: z
    .string()
    .max(50, 'El segundo nombre no puede exceder 50 caracteres')
    .optional()
    .nullable()
    .default(null),
  primerApellido: z
    .string()
    .min(2, 'El primer apellido debe tener al menos 2 caracteres')
    .max(50, 'El primer apellido no puede exceder 50 caracteres'),
  segundoApellido: z
    .string()
    .max(50, 'El segundo apellido no puede exceder 50 caracteres')
    .optional()
    .nullable()
    .default(null),

  // --- Datos Personales ---
  fechaNacimiento: z.coerce.date().refine(
    val => !isNaN(val.getTime()),
    { message: 'La fecha de nacimiento es inválida o requerida' }
  ),
  genero: z.nativeEnum(Genero),

  // --- Contacto ---
  direccion: z
    .string()
    .min(5, 'La dirección debe tener al menos 5 caracteres')
    .max(200, 'La dirección no puede exceder 200 caracteres'),
  barrio: z
    .string()
    .max(100, 'El barrio no puede exceder 100 caracteres')
    .optional()
    .nullable()
    .default(null),
  telefono: z
    .string()
    .min(7, 'El teléfono debe tener al menos 7 caracteres')
    .max(20, 'El teléfono no puede exceder 20 caracteres')
    .regex(
      /^[0-9+\-\s()]+$/,
      'Teléfono solo puede contener números, +, -, espacios y paréntesis'
    ),
  email: z
    .string()
    .email('El email no es válido')
    .max(100, 'El email no puede exceder 100 caracteres')
    .optional()
    .nullable()
    .transform(
      (
        val // Limpia y normaliza el email
      ) => (val === '' ? null : val?.toLowerCase() ?? null)
    ),

  // --- Metadata ---
  observaciones: z
    .string()
    .max(1000, 'Las observaciones no pueden exceder 1000 caracteres')
    .optional()
    .nullable()
    .default(null),
  fotografiaUrl: z
    .string()
    .url('La URL de la fotografía no es válida')
    .optional()
    .nullable()
    .default(null)
    .transform((val) => (val === '' ? null : val)), // Convierte "" a null
});

// SCHEMA PARA MENOR (extiende base + campos específicos)

const createMenorSchema = personaBaseComunSchema
  .extend({
    tipoPersona: z.literal(TipoPersona.MENOR), // Forzar que sea MENOR

    // Campos específicos de menor
    consentimientoInformado: z.boolean().optional().default(false), // No es obligatorio
    documentoConsentimientoUrl: z
      .string()
      .url('URL del documento de consentimiento inválida')
      .optional()
      .nullable()
      .default(null)
      .transform((val) => (val === '' ? null : val)),
  })
  .refine(
    (data) => {
      // Regla de negocio: Si aceptó el consentimiento, debe tener URL del documento
      if (data.consentimientoInformado === true) {
        // Asegura que la URL no sea null, undefined, o un string vacío
        return data.documentoConsentimientoUrl != null;
      }
      // Si no aceptó (false o undefined), la validación pasa
      return true;
    },
    {
      message:
        'Si el consentimiento informado fue aceptado, debe proporcionar la URL del documento',
      path: ['documentoConsentimientoUrl'], // Indica qué campo causó el error
    }
  );

// SCHEMA PARA PERSONAS ADULTAS (NO tiene campos de consentimiento)

const createPersonaAdultaSchema = personaBaseComunSchema.extend({
  tipoPersona: z.enum([
    TipoPersona.TUTOR,
    TipoPersona.BENEFICIARIO_ADULTO,
    TipoPersona.DOCENTE,
    TipoPersona.ADMINISTRATIVO,
    TipoPersona.PERSONAL_APOYO,
  ]),
  // No incluye consentimientoInformado ni documentoConsentimientoUrl
});

// SCHEMAS PARA EL API (los que usará el middleware)

/**
 * Schema para CREAR una Persona (POST /api/personas)
 * Usa "discriminatedUnion" para validar el body según el 'tipoPersona'
 */
export const createPersonaSchema = z.object({
  body: z.discriminatedUnion('tipoPersona', [
    createMenorSchema,
    createPersonaAdultaSchema,
  ]),
  // Se asegura que query y params estén vacíos
  query: z.object({}),
  params: z.object({}),
});

// Schema para ACTUALIZAR una Persona (PUT /api/personas/:id)

// 1. .partial() para que todos los campos base sean opcionales.
// 2. Campos de menor (consentimiento) también como opcionales.
const updatePersonaBodySchema = personaBaseComunSchema
  .partial()
  .extend({
    // tipoPersona es opcional en la actualización
    tipoPersona: z.nativeEnum(TipoPersona).optional(),
    // Campos de menor también son opcionales
    consentimientoInformado: z.boolean().optional(),
    documentoConsentimientoUrl: z
      .string()
      .url()
      .optional()
      .nullable()
      .transform((val) => (val === '' ? null : val)),
  })
  .refine(
    (data) => {
      // Se mantiene la lógica condicional en la actualización
      if (data.consentimientoInformado === true) {
        return data.documentoConsentimientoUrl != null;
      }
      return true;
    },
    {
      message:
        'Si el consentimiento es true, la URL del documento es requerida',
      path: ['documentoConsentimientoUrl'],
    }
  );

export const updatePersonaSchema = z.object({
  body: updatePersonaBodySchema,
  params: z.object({
    id: z.string().uuid('ID de persona inválido'),
  }),
  query: z.object({}),
});

// Schema para LISTAR Personas (GET /api/personas)
// Valida los query params para paginación y filtros.
export const listPersonasSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().min(1).optional().default(1),
    limit: z.coerce.number().int().min(1).max(100).optional().default(10),
    search: z.string().optional(),
    tipoPersona: z.nativeEnum(TipoPersona).optional(),
    estado: z.nativeEnum(EstadoGeneral).optional(),
  }),
  body: z.object({}),
  params: z.object({}),
});

//  Schema para OBTENER o ELIMINAR por ID (GET /:id, DELETE /:id)
// Valida que el ID en los params sea un UUID.
export const personaIdSchema = z.object({
  params: z.object({
    id: z.string().uuid('ID de persona inválido'),
  }),
  body: z.object({}),
  query: z.object({}),
});

// TIPOS INFERIDOS (DTOs)

// Tipos base inferidos
type CreateMenorDTO = z.infer<typeof createMenorSchema>;
type CreatePersonaAdultaDTO = z.infer<typeof createPersonaAdultaSchema>;

// DTOs que usará el Servicio
export type CreatePersonaDTO = CreateMenorDTO | CreatePersonaAdultaDTO;
export type UpdatePersonaDTO = z.infer<typeof updatePersonaBodySchema>;
export type ListPersonasQueryDTO = z.infer<typeof listPersonasSchema>['query'];