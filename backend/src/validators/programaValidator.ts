import { z } from 'zod';
import { 
    TipoPrograma, 
    PublicoObjetivo, 
    DiaSemana, 
    EstadoPrograma 
} from '@prisma/client';
import { validateRequest } from '../middlewares/validationMiddleware';

// ============================================================================
// 1. SCHEMAS BASE (Reglas de Negocio)
// ============================================================================

// Regex para validar formato de hora militar (HH:MM)
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const createProgramaBodySchema = z.object({
    codigo: z
        .string()
        .min(3, 'El código debe tener al menos 3 caracteres')
        .max(20, 'El código no puede exceder 20 caracteres')
        .trim()
        .toUpperCase(), // Forzar mayúsculas para estandarizar códigos
    
    nombre: z
        .string()
        .min(5, 'El nombre debe tener al menos 5 caracteres')
        .max(100, 'El nombre no puede exceder 100 caracteres')
        .trim(),
    
    descripcion: z
        .string()
        .max(1000, 'La descripción es demasiado larga')
        .optional(),
    
    tipoPrograma: z.nativeEnum(TipoPrograma, {
        message: 'Tipo de programa inválido',
    }),
    
    publicoObjetivo: z.nativeEnum(PublicoObjetivo, {
        message: 'Público objetivo inválido',
    }),
    
    edadMinima: z.number().int().min(0).optional(),
    edadMaxima: z.number().int().min(0).optional(),
    
    diasActividad: z.array(z.nativeEnum(DiaSemana)).nonempty('Debe seleccionar al menos un día de actividad'),
    
    // Recibir string "HH:MM", lo convertiremos en el servicio
    horaInicio: z.string().regex(timeRegex, 'Formato de hora inválido (use HH:MM)').optional(),
    horaFin: z.string().regex(timeRegex, 'Formato de hora inválido (use HH:MM)').optional(),
    
    requiereDocente: z.boolean().default(true),
    
    cupoMaximo: z.number().int().positive('El cupo debe ser un número positivo').optional(),
}).refine((data) => {
    // Validación cruzada: Edad Máxima >= Edad Mínima
    if (data.edadMinima !== undefined && data.edadMaxima !== undefined) {
        return data.edadMaxima >= data.edadMinima;
    }
    return true;
}, {
    message: "La edad máxima no puede ser menor que la edad mínima",
    path: ["edadMaxima"], // El error aparecerá en este campo
});

const updateProgramaBodySchema = createProgramaBodySchema.partial().extend({
    estado: z.nativeEnum(EstadoPrograma).optional(),
});

// ============================================================================
// 2. SCHEMAS DE RUTAS (Input de la API)
// ============================================================================

export const createProgramaSchema = z.object({
    body: createProgramaBodySchema,
});

export const updateProgramaSchema = z.object({
    params: z.object({
        id: z.string().uuid('ID de programa inválido'),
    }),
    body: updateProgramaBodySchema,
});

export const listProgramasSchema = z.object({
    query: z.object({
        tipo: z.nativeEnum(TipoPrograma).optional(),
        estado: z.nativeEnum(EstadoPrograma).optional(),
        publico: z.nativeEnum(PublicoObjetivo).optional(),
    }),
});

export const getProgramaByIdSchema = z.object({
    params: z.object({
        id: z.string().uuid('ID de programa inválido'),
    }),
});

// ============================================================================
// 3. DTOs (Tipos inferidos para TypeScript)
// ============================================================================

export type CreateProgramaDTO = z.infer<typeof createProgramaBodySchema>;
export type UpdateProgramaDTO = z.infer<typeof updateProgramaBodySchema>;
export type ListProgramasQueryDTO = z.infer<typeof listProgramasSchema>['query'];

// ============================================================================
// 4. MIDDLEWARES EXPORTADOS
// ============================================================================

export const validateCreatePrograma = validateRequest(createProgramaSchema);
export const validateUpdatePrograma = validateRequest(updateProgramaSchema);
export const validateListProgramas = validateRequest(listProgramasSchema);
export const validateGetProgramaById = validateRequest(getProgramaByIdSchema);