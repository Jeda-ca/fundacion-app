import { Request, Response } from 'express';
import { sendSuccess } from '../utils/responses';
import prisma from '../config/database';

/**
 * Controller de salud del sistema
 */
class HealthController {
  /**
   * GET /api/health
   * Verifica que el servidor y la BD estén funcionando
   */
  async check(req: Request, res: Response): Promise<Response> {
    try {
      // Verificar conexión a la base de datos
      await prisma.$queryRaw`SELECT 1`;

      return sendSuccess(res, 200, 'Sistema funcionando correctamente', {
        server: 'OK',
        database: 'Connected',
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      return sendSuccess(res, 500, 'Error en el sistema', {
        server: 'OK',
        database: 'Disconnected',
        error: error.message,
      });
    }
  }
}

export default new HealthController();