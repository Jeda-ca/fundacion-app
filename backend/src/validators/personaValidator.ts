import { z } from 'zod';
import { TipoDocumento, Genero, TipoPersona, EstadoGeneral } from '@prisma/client';
// IMPORTANTE: Importamos el middleware que acabamos de crear
import { validateRequest } from '../middlewares/validationMiddleware';

// ============================================================================
// SCHEMAS BASE (Reglas de validación)
// ============================================================================

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
  segundoNombre: z.string().max(50).optional().nullable().default(null),
  primerApellido: z
    .string()
    .min(2, 'El primer apellido debe tener al menos 2 caracteres')
    .max(50, 'El primer apellido no puede exceder 50 caracteres'),
  segundoApellido: z.string().max(50).optional().nullable().default(null),

  // --- Datos Personales ---
  fechaNacimiento: z.coerce.date().refine(
    (val) => !isNaN(val.getTime()),
    { message: 'La fecha de nacimiento es inválida o requerida' }
  ),
  genero: z.nativeEnum(Genero),

  // --- Contacto ---
  direccion: z
    .string()
    .min(5, 'La dirección debe tener al menos 5 caracteres')
    .max(200, 'La dirección no puede exceder 200 caracteres'),
  barrio: z.string().max(100).optional().nullable().default(null),
  telefono: z
    .string()
    .min(7, 'El teléfono debe tener al menos 7 caracteres')
    .max(20, 'El teléfono no puede exceder 20 caracteres')
    .regex(/^[0-9+\-\s()]+$/, 'Teléfono inválido'),
  email: z
    .string()
    .email('El email no es válido')
    .max(100)
    .optional()
    .nullable()
    .transform((val) => (val === '' ? null : val?.toLowerCase() ?? null)),

  // --- Metadata ---
  observaciones: z.string().max(1000).optional().nullable().default(null),
  fotografiaUrl: z
    .string()
    .url('URL inválida')
    .optional()
    .nullable()
    .default(null)
    .transform((val) => (val === '' ? null : val)),
});

// --- Schema Menor ---
const createMenorSchema = personaBaseComunSchema
  .extend({
    tipoPersona: z.literal(TipoPersona.MENOR),
    consentimientoInformado: z.boolean().optional().default(false),
    documentoConsentimientoUrl: z
      .string()
      .url()
      .optional()
      .nullable()
      .default(null)
      .transform((val) => (val === '' ? null : val)),
  })
  .refine(
    (data) => {
      if (data.consentimientoInformado === true) {
        return data.documentoConsentimientoUrl != null;
      }
      return true;
    },
    {
      message: 'La URL del documento es requerida si hay consentimiento',
      path: ['documentoConsentimientoUrl'],
    }
  );

// --- Schema Adulto ---
const createPersonaAdultaSchema = personaBaseComunSchema.extend({
  tipoPersona: z.enum([
    TipoPersona.TUTOR,
    TipoPersona.BENEFICIARIO_ADULTO,
    TipoPersona.DOCENTE,
    TipoPersona.ADMINISTRATIVO,
    TipoPersona.PERSONAL_APOYO,
  ]),
});

// ============================================================================
// SCHEMAS DE RUTAS (Lo que valida el middleware)
// ============================================================================

export const createPersonaSchema = z.object({
  body: z.discriminatedUnion('tipoPersona', [
    createMenorSchema,
    createPersonaAdultaSchema,
  ]),
  query: z.object({}),
  params: z.object({}),
});

const updatePersonaBodySchema = personaBaseComunSchema
  .partial()
  .extend({
    tipoPersona: z.nativeEnum(TipoPersona).optional(),
    consentimientoInformado: z.boolean().optional(),
    documentoConsentimientoUrl: z.string().url().optional().nullable(),
  })
  .refine(
    (data) => {
      if (data.consentimientoInformado === true) {
        return data.documentoConsentimientoUrl != null;
      }
      return true;
    },
    {
      message: 'La URL del documento es requerida',
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

export const personaIdSchema = z.object({
  params: z.object({
    id: z.string().uuid('ID de persona inválido'),
  }),
  body: z.object({}),
  query: z.object({}),
});

// ============================================================================
// TIPOS INFERIDOS (DTOs)
// ============================================================================

type CreateMenorDTO = z.infer<typeof createMenorSchema>;
type CreatePersonaAdultaDTO = z.infer<typeof createPersonaAdultaSchema>;

export type CreatePersonaDTO = CreateMenorDTO | CreatePersonaAdultaDTO;
export type UpdatePersonaDTO = z.infer<typeof updatePersonaBodySchema>;
export type ListPersonasQueryDTO = z.infer<typeof listPersonasSchema>['query'];

// ============================================================================
// Se contectan los schemas con el middleware genérico
// ============================================================================

export const validateCreatePersona = validateRequest(createPersonaSchema);
export const validateUpdatePersona = validateRequest(updatePersonaSchema);
export const validateListPersonas = validateRequest(listPersonasSchema);
export const validatePersonaId = validateRequest(personaIdSchema);