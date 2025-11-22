import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/responses';

const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'El username debe tener al menos 3 caracteres')
    .max(50, 'El username no puede exceder 50 caracteres')
    .regex(/^[a-zA-Z0-9_]+$/, 'El username solo puede contener letras, números y guiones bajos'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(255),
});

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    loginSchema.parse(req.body);
    return next();
  } catch (err: any) {
    const msg = err?.errors?.[0]?.message ?? 'Datos inválidos';
    return sendError(res, 400, msg);
  }
};
