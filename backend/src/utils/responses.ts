import { Response } from 'express';
import { ApiResponse } from '../types';

/**
 * Respuesta exitosa
 * Uso: return sendSuccess(res, 200, 'Usuario creado', usuario);
 */
export const sendSuccess = <T>(
  res: Response,
  statusCode: number = 200,
  message: string,
  data?: T
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

/**
 * Respuesta de error
 * Uso: return sendError(res, 400, 'Usuario no encontrado');
 */
export const sendError = (
  res: Response,
  statusCode: number = 500,
  message: string,
  error?: string
): Response => {
  const response: ApiResponse = {
    success: false,
    message,
    error,
  };
  return res.status(statusCode).json(response);
};

/**
 * Respuesta paginada
 */
export const sendPaginated = <T>(
  res: Response,
  data: T[],
  page: number,
  limit: number,
  total: number
): Response => {
  return res.status(200).json({
    success: true,
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
};