// src/types/auth.ts
import { RolUsuario, EstadoUsuario } from '@prisma/client';

// Datos que llega el frontend para login
export interface LoginRequest {
  username: string;
  password: string;
}

// Respuesta estandarizada del login
export interface AuthResponse {
  user: {
    id: string;
    username: string;
    rol: RolUsuario;
    personaId: string;
    estado: EstadoUsuario;
  };
  token: string;
  expiresAt: string;
}

// Payload que guardamos en el JWT
export interface JwtPayload {
  id: string;
  username: string;
  rol: RolUsuario;
  personaId: string;
  iat?: number;
  exp?: number;
}

// Usuario que queda en req.user (tipado para middleware)
export interface AuthenticatedUser {
  id: string;
  username: string;
  rol: RolUsuario;
  personaId: string;
}

// Error con códigos para distinguir causas en controller
export interface AuthError {
  message: string;
  code: 'INVALID_CREDENTIALS' | 'USER_INACTIVE' | 'USER_BLOCKED' | 'TOKEN_EXPIRED' | 'TOKEN_INVALID';
}
