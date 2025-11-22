import { Request, Response } from 'express';
import authService from '../services/authService';
import { sendSuccess, sendError } from '../utils/responses';

class AuthController {
  // POST /api/auth/login
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const credentials = req.body; // typed at service layer
      const result = await authService.login(credentials);
      return sendSuccess(res, 200, 'Autenticado correctamente', result);
    } catch (error: any) {
      // errores creados desde service definen code
      if (error?.code) {
        switch (error.code) {
          case 'INVALID_CREDENTIALS':
            return sendError(res, 401, error.message);
          case 'USER_INACTIVE':
          case 'USER_BLOCKED':
            return sendError(res, 403, error.message);
          default:
            return sendError(res, 401, 'Error de autenticación');
        }
      }
      console.error('Error en login:', error);
      return sendError(res, 500, 'Error interno del servidor');
    }
  }

  // GET /api/auth/me
  async me(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.user;
      if (!user) return sendError(res, 401, 'No autenticado');

      const userData = await authService.getCurrentUser(user.id);
      if (!userData) return sendError(res, 404, 'Usuario no encontrado');

      return sendSuccess(res, 200, 'Usuario autenticado', userData);
    } catch (error: any) {
      console.error('Error obteniendo usuario actual:', error);
      return sendError(res, 500, 'Error interno del servidor');
    }
  }

  // POST /api/auth/logout (opcional, stateless)
  async logout(_req: Request, res: Response): Promise<Response> {
    // Con JWT stateless, logout lo maneja frontend (eliminar token).
    return sendSuccess(res, 200, 'Sesión cerrada exitosamente', null);
  }
}

export default new AuthController();
