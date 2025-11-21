import { Router } from 'express';
import healthController from '../controllers/healthController';
import authRoutes from './authRoutes';
import personaRoutes from './personaRoutes';
import userRoutes from './userRoutes';
import programaRoutes from './programaRoutes';
import inscripcionRoutes from './inscripcionRoutes';

const router = Router();

/**
 * Ruta de salud del sistema
 * GET /api/health
 */
router.get('/health', healthController.check);

// ============================================================================
// RUTAS DE MÓDULOS
// ============================================================================

// Rutas de Autenticación
router.use('/auth', authRoutes);

// Rutas de Gestión de Personas
router.use('/personas', personaRoutes);

// Rutas de Gestión de Usuarios
router.use('/users', userRoutes);

// Rutas de Gestión de Programas
router.use('/programas', programaRoutes);

// Rutas de Gestión de Inscripciones
router.use('/inscripciones', inscripcionRoutes);

export default router;