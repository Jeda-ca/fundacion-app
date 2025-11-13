import prisma  from '../config/database';
import { Persona, Prisma, EstadoGeneral } from '@prisma/client';
import { CreatePersonaDTO, UpdatePersonaDTO, ListPersonasQueryDTO,} from '../validators/personaValidator';

class PersonaRepository {
  // Crea un nuevo registro de Persona
  async create(data: CreatePersonaDTO, creadorId: string): Promise<Persona> {
    const dataToSave: Prisma.PersonaCreateInput = {
      ...data,
      usuarioCreador: {
        connect: { id: creadorId },
      },
      usuarioModificador: {
        connect: { id: creadorId },
      },
    };

    return prisma.persona.create({
      data: dataToSave,
    });
  }

  //Busca una persona por número de documento (único)
  async findByDocumento(numeroDocumento: string): Promise<Persona | null> {
    return prisma.persona.findUnique({
      where: { numeroDocumento },
    });
  }

   /// Busca una persona por email (único)
  async findByEmail(email: string): Promise<Persona | null> {
    return prisma.persona.findUnique({
      where: { email },
    });
  }

  //Busca una persona por su ID (UUID)
  async findById(id: string): Promise<Persona | null> {
    return prisma.persona.findUnique({
      where: { id },
    });
  }

  //Busca persona por ID con relaciones incluidas para perfil detallado.
  async findByIdWithRelations(id: string) {
    return prisma.persona.findUnique({
      where: { id },
      include: {
        // Si es tutor, traer menores a su cargo
        tutorDe: {
          where: { estado: EstadoGeneral.ACTIVO },
          include: {
            menor: {
              select: {
                id: true,
                primerNombre: true,
                primerApellido: true,
                numeroDocumento: true,
              },
            },
          },
        },
        // Si es menor, traer sus tutores
        menorDe: {
          where: { estado: EstadoGeneral.ACTIVO },
          include: {
            tutor: {
              select: {
                id: true,
                primerNombre: true,
                primerApellido: true,
                telefono: true,
              },
            },
          },
        },
        // Si es menor, traer su padrino
        apadrinamientos: {
          where: { estado: EstadoGeneral.ACTIVO },
          include: {
            padrino: {
              select: {
                id: true,
                nombreCompleto: true,
                pais: true,
              },
            },
          },
        },
        // Programas en los que está inscrito
        inscripciones: {
          where: { estado: 'ACTIVO' },
          include: {
            programa: {
              select: {
                id: true,
                nombre: true,
                codigo: true,
              },
            },
          },
        },
      },
    });
  }

  //Cláusula 'where' para filtros dinámicos
  private buildWhereClause(
    filters: ListPersonasQueryDTO
  ): Prisma.PersonaWhereInput {
    const where: Prisma.PersonaWhereInput = {};

    // Filtro por estado (default 'ACTIVO' si no se especifica)
    where.estado = filters.estado ?? 'ACTIVO';

    // Filtro por tipoPersona
    if (filters.tipoPersona) {
      where.tipoPersona = filters.tipoPersona;
    }

    // Filtro de búsqueda (search)
    if (filters.search) {
      const search = filters.search?.trim();
      if (search ) {
        where.OR = [
          { primerNombre: { contains: search, mode: 'insensitive' } },
          { segundoNombre: { not: null, contains: search, mode: 'insensitive' } },
          { primerApellido: { contains: search, mode: 'insensitive' } },
          { segundoApellido: { not: null, contains: search, mode: 'insensitive' } },
          { numeroDocumento: { contains: search } },
          { email: { not: null, contains: search, mode: 'insensitive' } },
        ];
      }
    }

    return where;
  }

  //Obtiene una lista paginada de personas con filtros
    async findAllPaginado(filters: ListPersonasQueryDTO) {
    const { page, limit } = filters;
    const skip = (page - 1) * limit;
    const take = limit;

    const whereClause = this.buildWhereClause(filters);

    const [personas, total] = await prisma.$transaction([
      prisma.persona.findMany({
        where: whereClause,
        skip,
        take,
        orderBy: [
          { primerApellido: 'asc' },
          { primerNombre: 'asc' },
        ],
        // Campos necesarios para la lista
        select: {
          id: true,
          tipoDocumento: true,
          numeroDocumento: true,
          primerNombre: true,
          segundoNombre: true,
          primerApellido: true,
          segundoApellido: true,
          fechaNacimiento: true,
          genero: true,
          telefono: true,
          email: true,
          tipoPersona: true,
          estado: true,
          createdAt: true,
        },
      }),
      prisma.persona.count({
        where: whereClause,
      }),
    ]);

    // Retorna un objeto 'pagination'
    return {
      data: personas,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

 //Actualiza un registro de Persona
  async update(
    id: string,
    data: UpdatePersonaDTO,
    modificadorId: string
  ): Promise<Persona> {
    const dataToUpdate: Prisma.PersonaUpdateInput = {
      ...data,
      // Aseguramos que la fecha se envíe como Date si se actualiza
      ...(data.fechaNacimiento && {
        fechaNacimiento: new Date(data.fechaNacimiento),
      }),
      usuarioModificador: {
        connect: { id: modificadorId },
      },
    };

    return prisma.persona.update({
      where: { id },
      data: dataToUpdate,
    });
  }

//"Soft delete" (borrado lógico) cambiando el estado a INACTIVO
  async softDelete(id: string, modificadorId: string): Promise<Persona> {
    return prisma.persona.update({
      where: { id },
        data: {
          estado: EstadoGeneral.INACTIVO,
          usuarioModificador: {
          connect: { id: modificadorId },
        },
      }
    });
  }
}

export default new PersonaRepository();