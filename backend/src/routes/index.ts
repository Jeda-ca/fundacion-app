import { Router } from 'express';
import healthController from '../controllers/healthController';
import authRoutes from './authRoutes';

const router = Router();

/**
 * Ruta de salud del sistema
 * GET /api/health
 */
router.get('/health', healthController.check);
router.use('/auth', authRoutes);

export default router;