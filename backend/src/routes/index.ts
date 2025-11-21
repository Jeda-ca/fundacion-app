import { Router } from 'express';
import healthController from '../controllers/healthController';
import authRoutes from './authRoutes';
import personaRoutes from './personaRoutes'; // 1. Importar rutas de persona

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

// Rutas de Gestión de Personas (Módulo 1)
router.use('/personas', personaRoutes); // 2. Registrar rutas

export default router;