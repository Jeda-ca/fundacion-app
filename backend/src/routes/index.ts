import { Router } from 'express';
import healthController from '../controllers/healthController';

const router = Router();

/**
 * Ruta de salud del sistema
 * GET /api/health
 */
router.get('/health', healthController.check);

// Aquí iremos añadiendo más endpoints:
// router.use('/auth', authRoutes);
// router.use('/personas', personaRoutes);
// router.use('/programas', programaRoutes);
// etc.

export default router;