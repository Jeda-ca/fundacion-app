import inscripcionRepository from '../repositories/inscripcionRepository';
import personaRepository from '../repositories/personaRepository';
import programaRepository from '../repositories/programaRepository';
import { 
    CreateInscripcionDTO, 
    UpdateInscripcionDTO, 
    RetirarInscripcionDTO, 
    ListInscripcionesQueryDTO 
} from '../validators/inscripcionValidator';
import { AppError } from '../middlewares/errorHandler';
import { EstadoInscripcion } from '@prisma/client';

class InscripcionService {

    // ============================================================================
    // CREAR INSCRIPCIÓN (Con Validaciones de Negocio)
    // ============================================================================
    async create(data: CreateInscripcionDTO, userId: string) {
        
        // 1. Obtener Entidades para validar
        const persona = await personaRepository.findById(data.personaId);
        if (!persona) throw new AppError('La persona no existe', 404);

        const programa = await programaRepository.findById(data.programaId);
        if (!programa) throw new AppError('El programa no existe', 404);

        // 2. Validar Edad (Si el programa tiene restricciones)
        if (programa.edadMinima !== null || programa.edadMaxima !== null) {
            const edad = this.calcularEdad(persona.fechaNacimiento);
            
            if (programa.edadMinima !== null && edad < programa.edadMinima) {
                throw new AppError(`La persona tiene ${edad} años, pero el programa requiere mínimo ${programa.edadMinima}`, 400);
            }
            
            if (programa.edadMaxima !== null && edad > programa.edadMaxima) {
                throw new AppError(`La persona tiene ${edad} años, pero el programa permite máximo ${programa.edadMaxima}`, 400);
            }
        }

        // 3. Validar Duplicidad (Unicidad Activa)
        const inscripcionExistente = await inscripcionRepository.findActiveInscripcion(data.personaId, data.programaId);
        if (inscripcionExistente) {
            throw new AppError('La persona ya se encuentra inscrita y activa en este programa', 409);
        }

        // 4. Validar Cupos
        if (programa.cupoMaximo !== null) {
            const totalInscritos = await inscripcionRepository.countInscritos(data.programaId);
            if (totalInscritos >= programa.cupoMaximo) {
                throw new AppError(`El programa ha alcanzado su cupo máximo (${programa.cupoMaximo})`, 409);
            }
        }

        // 5. Crear Inscripción
        // Si no envían fecha manual, usamos la actual
        const fechaInscripcion = data.fechaInscripcion || new Date();

        const nuevaInscripcion = await inscripcionRepository.create({
            persona: { connect: { id: data.personaId } },
            programa: { connect: { id: data.programaId } },
            fechaInscripcion: fechaInscripcion,
            observaciones: data.observaciones,
            estado: EstadoInscripcion.ACTIVO,
            // Auditoría
            usuarioInscriptor: { connect: { id: userId } }
        });

        return nuevaInscripcion;
    }

    // ============================================================================
    // LISTAR INSCRIPCIONES
    // ============================================================================
    async list(filters: ListInscripcionesQueryDTO) {
        return inscripcionRepository.findAll(filters);
    }

    // ============================================================================
    // OBTENER POR ID
    // ============================================================================
    async getById(id: string) {
        const inscripcion = await inscripcionRepository.findById(id);
        if (!inscripcion) throw new AppError('Inscripción no encontrada', 404);
        return inscripcion;
    }

    // ============================================================================
    // ACTUALIZAR DATOS DE INSCRIPCIÓN (No estado)
    // ============================================================================
    async update(id: string, data: UpdateInscripcionDTO) {
        const inscripcion = await inscripcionRepository.findById(id);
        if (!inscripcion) throw new AppError('Inscripción no encontrada', 404);

        return inscripcionRepository.update(id, {
            observaciones: data.observaciones,
            fechaInscripcion: data.fechaInscripcion
        });
    }

    // ============================================================================
    // RETIRAR BENEFICIARIO (Cambio de Estado)
    // ============================================================================
    async retirar(id: string, data: RetirarInscripcionDTO) {
        const inscripcion = await inscripcionRepository.findById(id);
        if (!inscripcion) throw new AppError('Inscripción no encontrada', 404);

        if (inscripcion.estado !== EstadoInscripcion.ACTIVO) {
            throw new AppError('Solo se pueden retirar inscripciones que estén ACTIVAS', 400);
        }

        // Validar que fecha de retiro no sea anterior a la inscripción
        if (data.fechaRetiro < inscripcion.fechaInscripcion) {
            throw new AppError('La fecha de retiro no puede ser anterior a la fecha de inscripción', 400);
        }

        return inscripcionRepository.update(id, {
            estado: EstadoInscripcion.RETIRADO,
            fechaRetiro: data.fechaRetiro,
            motivoRetiro: data.motivoRetiro
        });
    }

    // ============================================================================
    // HELPERS
    // ============================================================================
    private calcularEdad(fechaNacimiento: Date): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - fechaNacimiento.getMonth();
        
        if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}

export default new InscripcionService();