import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { sendError } from '../utils/responses';
import { RolUsuario } from '@prisma/client'; // Asegúrate de importar esto

/**
 * Middleware de autenticación
 * Verifica que el token JWT sea válido
 */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      // Retornamos directamente para cortar el flujo, no hace falta return valor
      sendError(res, 401, 'Token no proporcionado');
      return;
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      sendError(res, 401, 'Formato de token inválido');
      return;
    }

    const payload = verifyToken(token);
    req.user = payload;

    next();
  } catch (error: any) {
    sendError(res, 401, 'Token inválido o expirado', error.message);
  }
};

/**
 * (NUEVO) Middleware de Autorización (RBAC)
 * Verifica si el usuario tiene el rol necesario para acceder.
 */
export const authorize = (rolesPermitidos: RolUsuario[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      sendError(res, 401, 'Usuario no autenticado');
      return;
    }

    if (!rolesPermitidos.includes(req.user.rol)) {
      sendError(res, 403, 'No tienes permisos para realizar esta acción');
      return;
    }

    next();
  };
};