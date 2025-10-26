import jwt, { SignOptions } from 'jsonwebtoken';
import { RolUsuario } from '@prisma/client';

// Validación explícita de variables de entorno
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '24h';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET debe estar definido en las variables de entorno');
}

// Estructura del payload del token
export interface JwtPayload {
  id: string;
  username: string;
  rol: RolUsuario;
  personaId: string;
}

/**
 * Genera un token JWT
 * @param payload - Datos del usuario
 * @returns Token JWT firmado
 */
export const generateToken = (payload: JwtPayload): string => {
const options: SignOptions = { expiresIn: JWT_EXPIRATION as any };
  return jwt.sign(payload, JWT_SECRET, options);
};

/**
 * Verifica y decodifica un token JWT
 * @param token - Token a verificar
 * @returns Payload decodificado
 * @throws Error si el token es inválido o expiró
 */
export const verifyToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, JWT_SECRET as string) as JwtPayload;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Token inválido');
    }
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expirado');
    }
    throw new Error('Error al verificar el token');
  }
};
