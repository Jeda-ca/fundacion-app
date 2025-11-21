import prisma from '../config/database';
import { 
    Inscripcion, 
    Prisma, 
    EstadoInscripcion 
} from '@prisma/client';

class InscripcionRepository {
    
    // ============================================================================
    // LECTURA
    // ============================================================================

    async findAll(filters: {
        programaId?: string;
        personaId?: string;
        estado?: EstadoInscripcion;
    }): Promise<Inscripcion[]> {
        const where: Prisma.InscripcionWhereInput = {};

        if (filters.programaId) where.programaId = filters.programaId;
        if (filters.personaId) where.personaId = filters.personaId;
        if (filters.estado) where.estado = filters.estado;

        return prisma.inscripcion.findMany({
            where,
            include: {
                persona: {
                    select: {
                        primerNombre: true,
                        primerApellido: true,
                        numeroDocumento: true,
                        tipoDocumento: true
                    }
                },
                programa: {
                    select: {
                        nombre: true,
                        codigo: true
                    }
                }
            },
            orderBy: {
                fechaInscripcion: 'desc'
            }
        });
    }

    async findById(id: string): Promise<Inscripcion | null> {
        return prisma.inscripcion.findUnique({
            where: { id },
            include: {
                persona: true,
                programa: true
            }
        });
    }

    // Busca si existe inscripción ACTIVA para esta persona en este programa.
    async findActiveInscripcion(personaId: string, programaId: string): Promise<Inscripcion | null> {
        return prisma.inscripcion.findFirst({
            where: {
                personaId,
                programaId,
                estado: EstadoInscripcion.ACTIVO
            }
        });
    }

    // Cuántos inscritos ACTIVOS tiene un programa.
    async countInscritos(programaId: string): Promise<number> {
        return prisma.inscripcion.count({
            where: {
                programaId,
                estado: EstadoInscripcion.ACTIVO
            }
        });
    }

    // ============================================================================
    // ESCRITURA
    // ============================================================================

    async create(data: Prisma.InscripcionCreateInput): Promise<Inscripcion> {
        return prisma.inscripcion.create({
            data,
            include: {
                persona: { select: { primerNombre: true, primerApellido: true } },
                programa: { select: { nombre: true } }
            }
        });
    }

    async update(id: string, data: Prisma.InscripcionUpdateInput): Promise<Inscripcion> {
        return prisma.inscripcion.update({
            where: { id },
            data,
        });
    }
}

export default new InscripcionRepository();