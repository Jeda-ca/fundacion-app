import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { sendError } from '../utils/responses';
import { RolUsuario } from '@prisma/client';

/**
 * Middleware de autenticación
 * Verifica que el token JWT sea válido y lo decodifica
 */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => { // Cambiado a void para evitar conflicto de tipos
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      sendError(res, 401, 'Token no proporcionado');
      return;
    }

    // Formato esperado: "Bearer <token>"
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
 * Middleware de Autorización (RBAC)
 * Verifica si el usuario tiene el rol necesario.
 * Debe usarse DESPUÉS de authMiddleware.
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