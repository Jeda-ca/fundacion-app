import prisma from '../config/database';
import { 
    Programa, 
    Prisma, 
    TipoPrograma, 
    EstadoPrograma, 
    PublicoObjetivo 
} from '@prisma/client';

class ProgramaRepository {
    
    // ============================================================================
    // LECTURA
    // ============================================================================

    async findAll(filters: {
        tipo?: TipoPrograma;
        estado?: EstadoPrograma;
        publico?: PublicoObjetivo;
    }): Promise<Programa[]> {
        const where: Prisma.ProgramaWhereInput = {};

        // Construcción dinámica del filtro
        if (filters.tipo) where.tipoPrograma = filters.tipo;
        if (filters.estado) where.estado = filters.estado;
        if (filters.publico) where.publicoObjetivo = filters.publico;

        return prisma.programa.findMany({
            where,
            orderBy: {
                nombre: 'asc', // Orden alfabético por defecto
            },
            include: {
                // Incluimos el creador para auditoría básica visual en el frontend
                usuarioCreador: {
                    select: {
                        username: true
                    }
                }
            }
        });
    }

    async findById(id: string): Promise<Programa | null> {
        return prisma.programa.findUnique({
            where: { id },
            include: {
                responsables: true, // Útil para ver quién está a cargo
            }
        });
    }

    async findByCodigo(codigo: string): Promise<Programa | null> {
        return prisma.programa.findUnique({
            where: { codigo },
        });
    }

    // ============================================================================
    // ESCRITURA
    // ============================================================================

    async create(data: Prisma.ProgramaCreateInput): Promise<Programa> {
        return prisma.programa.create({
            data,
        });
    }

    async update(id: string, data: Prisma.ProgramaUpdateInput): Promise<Programa> {
        return prisma.programa.update({
            where: { id },
            data,
        });
    }

    // No implementamos delete físico, usaremos inactivación vía update (estado: INACTIVO)
}

export default new ProgramaRepository();