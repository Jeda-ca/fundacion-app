import { z } from 'zod';
import { EstadoInscripcion } from '@prisma/client';
import { validateRequest } from '../middlewares/validationMiddleware';

// ============================================================================
// 1. SCHEMAS BASE
// ============================================================================

const createInscripcionBodySchema = z.object({
    programaId: z.string().uuid('ID de programa inválido'),
    personaId: z.string().uuid('ID de persona inválido'),
    observaciones: z.string().max(1000).optional(),
    // La fecha de inscripción suele ser "hoy" por defecto, pero permitimos enviarla
    // para cargas históricas o registros manuales con fecha retroactiva.
    fechaInscripcion: z.coerce.date().optional(), 
});

const updateInscripcionBodySchema = z.object({
    observaciones: z.string().max(1000).optional(),
    fechaInscripcion: z.coerce.date().optional(),
});

// Schema específico para RETIRAR un beneficiario
const retirarInscripcionBodySchema = z.object({
    fechaRetiro: z.coerce.date({
        message: "La fecha de retiro es obligatoria y debe ser válida"
    }),
    motivoRetiro: z.string().min(5, "Debe especificar un motivo de retiro (mínimo 5 caracteres)"),
});

// ============================================================================
// 2. SCHEMAS DE RUTAS
// ============================================================================

export const createInscripcionSchema = z.object({
    body: createInscripcionBodySchema,
});

export const listInscripcionesSchema = z.object({
    query: z.object({
        programaId: z.string().uuid().optional(),
        personaId: z.string().uuid().optional(),
        estado: z.nativeEnum(EstadoInscripcion).optional(),
    }),
});

export const updateInscripcionSchema = z.object({
    params: z.object({
        id: z.string().uuid('ID de inscripción inválido'),
    }),
    body: updateInscripcionBodySchema,
});

// Endpoint especial para retirar (cambio de estado a RETIRADO)
export const retirarInscripcionSchema = z.object({
    params: z.object({
        id: z.string().uuid('ID de inscripción inválido'),
    }),
    body: retirarInscripcionBodySchema,
});

export const getByIdSchema = z.object({
    params: z.object({
        id: z.string().uuid('ID de inscripción inválido'),
    }),
});

// ============================================================================
// 3. DTOs
// ============================================================================

export type CreateInscripcionDTO = z.infer<typeof createInscripcionBodySchema>;
export type UpdateInscripcionDTO = z.infer<typeof updateInscripcionBodySchema>;
export type RetirarInscripcionDTO = z.infer<typeof retirarInscripcionBodySchema>;
export type ListInscripcionesQueryDTO = z.infer<typeof listInscripcionesSchema>['query'];

// ============================================================================
// 4. MIDDLEWARES
// ============================================================================

export const validateCreateInscripcion = validateRequest(createInscripcionSchema);
export const validateListInscripciones = validateRequest(listInscripcionesSchema);
export const validateUpdateInscripcion = validateRequest(updateInscripcionSchema);
export const validateRetirarInscripcion = validateRequest(retirarInscripcionSchema);
export const validateGetInscripcionById = validateRequest(getByIdSchema);