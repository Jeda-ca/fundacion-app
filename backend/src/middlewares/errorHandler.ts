import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/responses';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

/**
 * Clase de error personalizada para manejar errores de negocio (ej. 'No encontrado')
 */
export class AppError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

/**
 * Middleware global de manejo de errores.
 * Captura todos los errores lanzados en la aplicación.
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  // Loggear el error para depuración (excepto en 'test')
  if (process.env.NODE_ENV !== 'test') {
    console.error('Error capturado por errorHandler:', err);
  }

  // Errores de Zod (Validación de DTOs)
  if (err instanceof ZodError) {
    // Corrección para tu 'sendError': Tomamos solo el primer mensaje de error.
    const firstIssueMessage = err.issues[0]?.message || 'Datos de entrada inválidos';
    return sendError(res, 400, `Validación fallida: ${firstIssueMessage}`);
  }

  // Errores conocidos de Prisma (Base de Datos)
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // P2002: Violación de restricción única (ej. email o documento duplicado)
    if (err.code === 'P2002') {
      const target = (err.meta?.target as string[])?.join(', ');
      return sendError(
        res,
        409, // 409 Conflict
        `El campo '${target}' ya existe. Debe ser único.`
      );
    }
    // P2025: Registro no encontrado (ej. en un update o delete)
    if (err.code === 'P2025') {
      return sendError(res, 404, 'El registro no fue encontrado.');
    }
  }

  // Errores de negocio personalizados (lanzados desde el servicio)
  if (err instanceof AppError) {
    return sendError(res, err.statusCode, err.message);
  }

  // Fallback para errores inesperados
  return sendError(res, 500, 'Error interno del servidor.');
};