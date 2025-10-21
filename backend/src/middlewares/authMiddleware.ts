import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { sendError } from '../utils/responses';

/**
 * Middleware de autenticación
 * Verifica que el token JWT sea válido
 * Si es válido, añade req.user con los datos del usuario
 */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    // Obtener token del header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return sendError(res, 401, 'Token no proporcionado');
    }

    // Formato esperado: "Bearer TOKEN_AQUI"
    const token = authHeader.split(' ')[1];

    if (!token) {
      return sendError(res, 401, 'Formato de token inválido');
    }

    // Verificar y decodificar token
    const payload = verifyToken(token);

    // Añadir usuario al request para que esté disponible en controladores
    req.user = payload;

    // Continuar al siguiente middleware o controlador
    next();
  } catch (error: any) {
    return sendError(res, 401, 'Token inválido o expirado', error.message);
  }
};