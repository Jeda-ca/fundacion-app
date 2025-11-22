import prisma from '../config/database';
import { Usuario, RolUsuario, EstadoUsuario, Prisma } from '@prisma/client';
import { CreateUserDTO, UpdateUserDTO } from '../validators/userValidator';

// Tipo auxiliar para cuando necesitamos datos de la persona en el listado
type UsuarioConPersona = Usuario & {
  persona?: {
    id: string;
    primerNombre: string;
    primerApellido: string;
    email: string | null;
    telefono: string | null;
    numeroDocumento: string;
  } | null;
};

class UserRepository {
  // ============================================================================
  // LECTURA (FIND)
  // ============================================================================

  // Busca usuario por username (campo único)
  async findByUsername(username: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({ where: { username } });
  }

  // Busca usuario por email (campo único) - VALIDACIÓN
  async findByEmail(email: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({ where: { email } });
  }

  // Busca si una persona ya tiene usuario asignado - VALIDACIÓN 1:1
  async findByPersonaId(personaId: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({ where: { personaId } });
  }

  // Busca por ID
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
            numeroDocumento: true,
          },
        },
      },
    });
  }

  /**
   * Lista usuarios con filtros opcionales (Rol, Estado)
   * Incluye datos básicos de la persona asociada para mostrar en tablas del frontend.
   */
  async findAll(rol?: RolUsuario, estado?: EstadoUsuario) {
    // Se construye el objeto where dinámicamente
    const where: Prisma.UsuarioWhereInput = {};
    
    if (rol) where.rol = rol;
    if (estado) where.estado = estado;

    return prisma.usuario.findMany({
      where,
      include: {
        persona: {
          select: {
            id: true,
            primerNombre: true,
            primerApellido: true,
            numeroDocumento: true,
            email: true, // Para ver si coincide con el del usuario
          },
        },
      },
      orderBy: { createdAt: 'desc' }, // Los más recientes primero
    });
  }

  // ============================================================================
  // ESCRITURA (CREATE / UPDATE)
  // ============================================================================

  async create(data: CreateUserDTO, hashedPassword: string): Promise<Usuario> {
    return prisma.usuario.create({
      data: {
        username: data.username,
        email: data.email, // El email obligatorio del DTO
        password: hashedPassword,
        rol: data.rol,
        persona: {
          connect: { id: data.personaId }, // Conexión con la tabla Personas
        },
      },
    });
  }

  async update(id: string, data: UpdateUserDTO & { password?: string }): Promise<Usuario> {
    return prisma.usuario.update({
      where: { id },
      data: data,
    });
  }

  // Actualizar solo el último acceso (login)
  async updateLastAccess(id: string) {
    return prisma.usuario.update({
      where: { id },
      data: { ultimoAcceso: new Date() },
    });
  }
}

export default new UserRepository();