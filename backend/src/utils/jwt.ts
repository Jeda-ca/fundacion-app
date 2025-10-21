import jwt from 'jsonwebtoken';
import { RolUsuario } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_change_in_production';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '24h';

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
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION,
  });
};

/**
 * Verifica y decodifica un token JWT
 * @param token - Token a verificar
 * @returns Payload decodificado
 * @throws Error si el token es inválido o expiró
 */
export const verifyToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
};