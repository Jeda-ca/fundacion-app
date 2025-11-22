import { Router } from 'express';
import programaController from '../controllers/programaController';
import { authMiddleware, authorize } from '../middlewares/authMiddleware';
import { 
    validateCreatePrograma, 
    validateListProgramas, 
    validateGetProgramaById, 
    validateUpdatePrograma 
} from '../validators/programaValidator';
import { RolUsuario } from '@prisma/client';

const router = Router();

// ============================================================================
// SEGURIDAD GLOBAL
// ============================================================================
// 1. Autenticación requerida para todas las rutas
router.use(authMiddleware);

// ============================================================================
// RUTAS PÚBLICAS PARA ROLES INTERNOS (Admin y Docente)
// ============================================================================

// GET /api/programas -> Listar programas (con filtros)
router.get(
    '/',
    authorize([RolUsuario.ADMIN, RolUsuario.DOCENTE]),
    validateListProgramas,
    programaController.list
);

// GET /api/programas/:id -> Ver detalles de un programa
router.get(
    '/:id',
    authorize([RolUsuario.ADMIN, RolUsuario.DOCENTE]),
    validateGetProgramaById,
    programaController.getById
);

// ============================================================================
// RUTAS ADMINISTRATIVAS (Solo Admin)
// ============================================================================

// POST /api/programas -> Crear nuevo programa
router.post(
    '/',
    authorize([RolUsuario.ADMIN]),
    validateCreatePrograma,
    programaController.create
);

// PATCH /api/programas/:id -> Actualizar programa existente
router.patch(
    '/:id',
    authorize([RolUsuario.ADMIN]),
    validateUpdatePrograma,
    programaController.update
);

export default router;