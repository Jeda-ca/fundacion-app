import prisma from '../config/database';
import { Usuario, RolUsuario, EstadoUsuario } from '@prisma/client';

// Tipo auxiliar que incluye parte de la persona (si existe)
type UsuarioConPersona = Usuario & {
  persona?: {
    id: string;
    primerNombre: string;
    primerApellido: string;
    email: string | null;
    telefono: string | null;
  } | null;
};

class UserRepository {
  // Buscar usuario por username (campo único)
  async findByUsername(username: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({ where: { username } });
  }

  // Buscar usuario y traer datos básicos de la persona relacionada
  async findByUsernameWithPersona(username: string): Promise<UsuarioConPersona | null> {
    return prisma.usuario.findUnique({
      where: { username },
      include: {
        persona: {
          select: {
            id: true,
            primerNombre: true,
            primerApellido: true,
            email: true,
            telefono: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({ where: { id } });
  }

  async findByIdWithPersona(id: string): Promise<UsuarioConPersona | null> {
    return prisma.usuario.findUnique({
      where: { id },
      include: {
        persona: {
          select: {
            id: true,
            primerNombre: true,
            primerApellido: true,
            email: true,
            telefono: true,
          },
        },
      },
    });
  }

  async updateLastAccess(id: string) {
    return prisma.usuario.update({
      where: { id },
      data: { ultimoAcceso: new Date() },
    });
  }

  async isUsernameAvailable(username: string): Promise<boolean> {
    const u = await prisma.usuario.findUnique({ where: { username }, select: { id: true } });
    return !u;
  }

  async findByRole(rol: RolUsuario) {
    return prisma.usuario.findMany({
      where: { rol },
      include: {
        persona: {
          select: { id: true, primerNombre: true, primerApellido: true },
        },
      },
    });
  }

  async findActiveUsers() {
  return prisma.usuario.findMany({
    where: { estado: EstadoUsuario.ACTIVO }, // ← CAMBIO: usar enum, no string
    include: { persona: { select: { id: true, primerNombre: true, primerApellido: true } } },
    });
  }
}

export default new UserRepository();
