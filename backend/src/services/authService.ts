import userRepository from '../repositories/userRepository';
import { verifyPassword } from '../utils/password';
import { generateToken } from '../utils/jwt';
import { LoginRequest, AuthResponse, AuthError } from '../types/auth';
import { EstadoUsuario } from '@prisma/client';

class AuthService {
  // Lógica principal de login
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const { username, password } = credentials;

    // 1) Buscar usuario
    const user = await userRepository.findByUsername(username);
    if (!user) {
      throw this.createAuthError('INVALID_CREDENTIALS', 'Usuario o contraseña incorrectos');
    }

    // 2) Revisar estado del usuario
    if (user.estado === EstadoUsuario.INACTIVO) {
      throw this.createAuthError('USER_INACTIVE', 'Usuario inactivo. Contacte al administrador');
    }
    if (user.estado === EstadoUsuario.BLOQUEADO) {
      throw this.createAuthError('USER_BLOCKED', 'Usuario bloqueado. Contacte al administrador');
    }

    // 3) Verificar contraseña
    const ok = await verifyPassword(password, user.password);
    if (!ok) {
      throw this.createAuthError('INVALID_CREDENTIALS', 'Usuario o contraseña incorrectos');
    }

    // 4) Actualizar último acceso (no bloquea login)
    try {
      await userRepository.updateLastAccess(user.id);
    } catch (err) {
      console.error('Error actualizando ultimoAcceso:', err);
    }

    // 5) Generar token JWT
    const token = generateToken({
      id: user.id,
      username: user.username,
      rol: user.rol,
      personaId: user.personaId ?? null,
    });

    // 6) Calcular expiresAt (ej: 24h por defecto)
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    // 7) Retornar respuesta (sin password)
    const result: AuthResponse = {
      user: {
        id: user.id,
        username: user.username,
        rol: user.rol,
        personaId: user.personaId ?? null,
        estado: user.estado,
      },
      token,
      expiresAt: expiresAt.toISOString(),
    };

    return result;
  }

  // Obtener info completa del usuario autenticado
  async getCurrentUser(userId: string) {
    const u = await userRepository.findByIdWithPersona(userId);
    if (!u) return null;
    return {
      id: u.id,
      username: u.username,
      rol: u.rol,
      personaId: u.personaId,
      estado: u.estado,
      persona: u.persona ?? null,
    };
  }

  private createAuthError(code: AuthError['code'], message: string): Error & { code: AuthError['code'] } {
    const err = new Error(message) as Error & { code: AuthError['code'] };
    err.code = code;
    return err;
  }
}

export default new AuthService();
