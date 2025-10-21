import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/responses';
import { Prisma } from '@prisma/client';

/**
 * Middleware global para manejo de errores
 * Se ejecuta cuando hay un error en cualquier parte de la app
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.error('Error:', err);

  // Error de validación de Prisma (campo único duplicado, etc.)
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return sendError(res, 400, 'El registro ya existe', 'Valor duplicado');
    }
    if (err.code === 'P2025') {
      return sendError(res, 404, 'Registro no encontrado');
    }
  }

  // Error de validación de Zod (lo implementaremos después)
  if (err.name === 'ZodError') {
    return sendError(res, 400, 'Datos inválidos', err.errors);
  }

  // Error de autenticación
  if (err.message === 'Token inválido o expirado') {
    return sendError(res, 401, 'No autenticado', err.message);
  }

  // Error genérico
  return sendError(
    res,
    err.statusCode || 500,
    err.message || 'Error interno del servidor',
    process.env.NODE_ENV === 'development' ? err.stack : undefined
  );
};