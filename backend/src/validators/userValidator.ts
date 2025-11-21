import { z } from 'zod';
import { RolUsuario, EstadoUsuario } from '@prisma/client';
import { validateRequest } from '../middlewares/validationMiddleware';

// ============================================================================
// 1. SCHEMAS BASE (Reglas de Negocio)
// ============================================================================

const createUserBodySchema = z.object({
    personaId: z.string().uuid('El ID de la persona debe ser un UUID válido'),
    
    username: z
        .string()
        .min(4, 'El usuario debe tener al menos 4 caracteres')
        .max(50, 'El usuario no puede exceder 50 caracteres')
        .regex(/^[a-zA-Z0-9._]+$/, 'El usuario solo puede contener letras, números, puntos y guiones bajos'),
    
    email: z
        .string()
        .email('Debes proporcionar un email válido para la cuenta de usuario')
        .max(100),
    
    password: z
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    
    rol: z.nativeEnum(RolUsuario, {
        message: 'Rol inválido. Valores permitidos: ADMIN, DOCENTE',
    }),
});

const updateUserBodySchema = z.object({
    rol: z.nativeEnum(RolUsuario).optional(),
    estado: z.nativeEnum(EstadoUsuario).optional(),
    password: z.string().min(6).optional(), 
});

// ============================================================================
// 2. SCHEMAS DE RUTAS (Input de la API)
// ============================================================================

export const createUserSchema = z.object({
    body: createUserBodySchema,
});

export const listUsersSchema = z.object({
    query: z.object({
    rol: z.nativeEnum(RolUsuario).optional(),
    estado: z.nativeEnum(EstadoUsuario).optional(),
    }),
});

export const updateUserSchema = z.object({
    params: z.object({
        id: z.string().uuid('ID de usuario inválido'),
    }),
    body: updateUserBodySchema,
});

// ============================================================================
// 3. DTOs (Tipos inferidos para TypeScript)
// ============================================================================

export type CreateUserDTO = z.infer<typeof createUserBodySchema>;
export type UpdateUserDTO = z.infer<typeof updateUserBodySchema>;
export type ListUsersQueryDTO = z.infer<typeof listUsersSchema>['query'];

// ============================================================================
// 4. MIDDLEWARES EXPORTADOS
// ============================================================================

export const validateCreateUser = validateRequest(createUserSchema);
export const validateListUsers = validateRequest(listUsersSchema);
export const validateUpdateUser = validateRequest(updateUserSchema);