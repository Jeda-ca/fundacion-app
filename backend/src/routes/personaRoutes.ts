import { Router } from 'express';
import personaController from '../controllers/personaController';
import { authMiddleware, authorize } from '../middlewares/authMiddleware';
import {
  validateCreatePersona,
  validateUpdatePersona,
  validateListPersonas,
  validatePersonaId,
} from '../validators/personaValidator';
import { RolUsuario } from '@prisma/client';

const router = Router();

// ============================================================================
// MIDDLEWARE GLOBAL DEL MÓDULO
// ============================================================================

// Todas las rutas de /personas requieren autenticación (token válido)
router.use(authMiddleware);

// ============================================================================
// DEFINICIÓN DE RUTAS
// ============================================================================

/**
 * POST /api/personas
 * Crea una nueva persona.
 * Permisos: Solo ADMIN.
 */
router.post(
  '/',
  authorize([RolUsuario.ADMIN]), // Solo ADMIN
  validateCreatePersona,         // Valida el body con Zod
  personaController.create       // Ejecuta el controlador
);

/**
 * GET /api/personas
 * Obtiene la lista paginada de personas.
 * Permisos: ADMIN y DOCENTE.
 */
router.get(
  '/',
  authorize([RolUsuario.ADMIN, RolUsuario.DOCENTE]), // Ambos roles
  validateListPersonas, // Valida query params (page, limit, filters)
  personaController.list
);

/**
 * GET /api/personas/:id
 * Obtiene una persona por ID.
 * Permisos: ADMIN y DOCENTE.
 */
router.get(
  '/:id',
  authorize([RolUsuario.ADMIN, RolUsuario.DOCENTE]),
  validatePersonaId, // Valida que el ID sea un UUID
  personaController.getById
);

/**
 * PUT /api/personas/:id
 * Actualiza una persona.
 * Permisos: Solo ADMIN.
 */
router.put(
  '/:id',
  authorize([RolUsuario.ADMIN]),
  validateUpdatePersona, // Valida ID y body (parcial)
  personaController.update
);

/**
 * DELETE /api/personas/:id
 * Inactiva una persona (Soft Delete).
 * Permisos: Solo ADMIN.
 */
router.delete(
  '/:id',
  authorize([RolUsuario.ADMIN]),
  validatePersonaId, // Valida que el ID sea un UUID
  personaController.delete
);

export default router;