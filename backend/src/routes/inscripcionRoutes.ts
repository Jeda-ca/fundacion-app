import { Router } from 'express';
import inscripcionController from '../controllers/inscripcionController';
import { authMiddleware, authorize } from '../middlewares/authMiddleware';
import { 
    validateCreateInscripcion, 
    validateListInscripciones, 
    validateGetInscripcionById, 
    validateUpdateInscripcion,
    validateRetirarInscripcion
} from '../validators/inscripcionValidator';
import { RolUsuario } from '@prisma/client';

const router = Router();

// ============================================================================
// SEGURIDAD GLOBAL
// ============================================================================
router.use(authMiddleware);

// ============================================================================
// RUTAS DE CONSULTA (Admin y Docente)
// ============================================================================

// GET /api/inscripciones -> Listar (con filtros por programa, persona, estado)
router.get(
    '/',
    authorize([RolUsuario.ADMIN, RolUsuario.DOCENTE]),
    validateListInscripciones,
    inscripcionController.list
);

// GET /api/inscripciones/:id -> Ver detalle
router.get(
    '/:id',
    authorize([RolUsuario.ADMIN, RolUsuario.DOCENTE]),
    validateGetInscripcionById,
    inscripcionController.getById
);

// ============================================================================
// RUTAS ADMINISTRATIVAS (Solo Admin)
// ============================================================================

// POST /api/inscripciones -> Inscribir un beneficiario
router.post(
    '/',
    authorize([RolUsuario.ADMIN]),
    validateCreateInscripcion,
    inscripcionController.create
);

// PATCH /api/inscripciones/:id -> Actualizar datos básicos (obs, fecha)
router.patch(
    '/:id',
    authorize([RolUsuario.ADMIN]),
    validateUpdateInscripcion,
    inscripcionController.update
);

// PATCH /api/inscripciones/:id/retirar -> Acción especial de retiro
router.patch(
    '/:id/retirar',
    authorize([RolUsuario.ADMIN]),
    validateRetirarInscripcion,
    inscripcionController.retirar
);

export default router;