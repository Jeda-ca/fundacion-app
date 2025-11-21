import { Router } from 'express';
import userController from '../controllers/userController';
import { 
    validateCreateUser, 
    validateListUsers, 
    validateUpdateUser 
} from '../validators/userValidator';
// CORRECCIÓN: Importamos 'authMiddleware' (nombre real del archivo) en lugar de 'authenticate'
import { authMiddleware, authorize } from '../middlewares/authMiddleware';
import { RolUsuario } from '@prisma/client';

const router = Router();

// ============================================================================
// SEGURIDAD GLOBAL DEL MÓDULO
// ============================================================================
// 1. Debe estar autenticado (tener Token válido)
router.use(authMiddleware);

// 2. Debe ser ADMIN (Solo administradores gestionan usuarios)
router.use(authorize([RolUsuario.ADMIN]));


// ============================================================================
// ENDPOINTS
// ============================================================================

// POST /api/users -> Crear un nuevo usuario vinculado a una persona
router.post('/', validateCreateUser, userController.create);

// GET /api/users -> Listar usuarios (acepta filtros ?rol=DOCENTE&estado=ACTIVO)
router.get('/', validateListUsers, userController.list);

// PATCH /api/users/:id -> Actualizar usuario (cambiar rol, estado o reset password)
router.patch('/:id', validateUpdateUser, userController.update);

export default router;