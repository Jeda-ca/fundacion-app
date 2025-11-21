import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { sendError } from '../utils/responses';

export const validateRequest = (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // 1. Validar y transformar
      // Usamos 'as any' para facilitar la asignación posterior
      const parsed = await schema.parseAsync({
        body: req.body || {},
        query: req.query || {},
        params: req.params || {},
      }) as any;

      // 2. Asignación Segura (Sin borrar propiedades)
      
      // Body suele ser escribible, así que lo asignamos directo
      if (parsed.body) {
        req.body = parsed.body;
      }

      // Para query y params, usamos Object.assign para actualizar valores
      // transformados (ej: string "1" -> number 1).
      // NO intentamos borrar propiedades viejas para evitar el error de 'getter-only'.
      if (parsed.query) {
        Object.assign(req.query, parsed.query);
      }
      
      if (parsed.params) {
        Object.assign(req.params, parsed.params);
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message,
        }));
        
        const firstMessage = errorMessages[0]?.message || 'Error de validación';
        return sendError(res, 400, `Datos inválidos: ${firstMessage}`);
      }
      // Pasa errores no controlados al errorHandler global
      next(error);
    }
  };