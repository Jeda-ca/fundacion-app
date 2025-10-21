import { Request } from 'express';
import { RolUsuario } from '@prisma/client';

// Extender el tipo Request de Express para incluir el usuario autenticado
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        username: string;
        rol: RolUsuario;
        personaId: string;
      };
    }
  }
}

// DTOs (Data Transfer Objects) - Lo que esperas recibir/enviar
export interface LoginDTO {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    rol: RolUsuario;
    personaId: string;
  };
}

// Respuesta estándar de la API
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Tipo para paginación
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}