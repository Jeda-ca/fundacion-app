import { Prisma } from '@prisma/client';
import programaRepository from '../repositories/programaRepository';
import { 
    CreateProgramaDTO, 
    UpdateProgramaDTO, 
    ListProgramasQueryDTO 
} from '../validators/programaValidator';
import { AppError } from '../middlewares/errorHandler';

class ProgramaService {
    
    // ============================================================================
    // CREAR PROGRAMA
    // ============================================================================
    async create(data: CreateProgramaDTO, userId: string) {
        // 1. Verificar unicidad del Código
        const programaExistente = await programaRepository.findByCodigo(data.codigo);
        if (programaExistente) {
            throw new AppError(`El código de programa '${data.codigo}' ya está en uso`, 409);
        }

        // 2. Preparar datos para Prisma (Conversión de Tipos)
        const programaData: Prisma.ProgramaCreateInput = {
            codigo: data.codigo,
            nombre: data.nombre,
            descripcion: data.descripcion,
            tipoPrograma: data.tipoPrograma,
            publicoObjetivo: data.publicoObjetivo,
            edadMinima: data.edadMinima,
            edadMaxima: data.edadMaxima,
            diasActividad: data.diasActividad,
            requiereDocente: data.requiereDocente,
            cupoMaximo: data.cupoMaximo,
            // Conversión de string "HH:MM" a Date
            horaInicio: data.horaInicio ? this.parseTime(data.horaInicio) : undefined,
            horaFin: data.horaFin ? this.parseTime(data.horaFin) : undefined,
            // Auditoría: Quién lo creó (Conectamos con la tabla Usuario)
            usuarioCreador: {
                connect: { id: userId }
            }
        };

        // 3. Guardar en BD
        const nuevoPrograma = await programaRepository.create(programaData);

        // 4. Formatear respuesta
        return this.mapToResponse(nuevoPrograma);
    }

    // ============================================================================
    // LISTAR PROGRAMAS
    // ============================================================================
    async list(filters: ListProgramasQueryDTO) {
        const programas = await programaRepository.findAll(filters);
        
        // Mapeamos todos los resultados para formatear las horas
        return programas.map(p => this.mapToResponse(p));
    }

    // ============================================================================
    // OBTENER POR ID
    // ============================================================================
    async getById(id: string) {
        const programa = await programaRepository.findById(id);
        
        if (!programa) {
            throw new AppError('Programa no encontrado', 404);
        }

        return this.mapToResponse(programa);
    }

    // ============================================================================
    // ACTUALIZAR PROGRAMA
    // ============================================================================
    async update(id: string, data: UpdateProgramaDTO) {
        // 1. Verificar existencia
        const programaActual = await programaRepository.findById(id);
        if (!programaActual) {
            throw new AppError('Programa no encontrado', 404);
        }

        // 2. Si están cambiando el código, verificar que el nuevo no exista
        if (data.codigo && data.codigo !== programaActual.codigo) {
            const codigoOcupado = await programaRepository.findByCodigo(data.codigo);
            if (codigoOcupado) {
                throw new AppError(`El código '${data.codigo}' ya está en uso por otro programa`, 409);
            }
        }

        // 3. Preparar datos de actualización
        const updateData: Prisma.ProgramaUpdateInput = {
            ...data,
            // Conversión condicional de horas solo si vienen en el payload
            horaInicio: data.horaInicio ? this.parseTime(data.horaInicio) : undefined,
            horaFin: data.horaFin ? this.parseTime(data.horaFin) : undefined,
        };

        // 4. Actualizar en BD
        const programaActualizado = await programaRepository.update(id, updateData);

        return this.mapToResponse(programaActualizado);
    }

    // ============================================================================
    // HELPERS PRIVADOS (Transformación de Datos)
    // ============================================================================

    /**
     * Convierte un string "HH:MM" a un objeto Date (usando fecha base arbitraria)
     * Prisma almacena Time como DateTime, ignorando la fecha al leer si es tipo Time,
     * pero necesitamos enviar un Date válido.
     */
    private parseTime(timeString: string): Date {
        const [hours, minutes] = timeString.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
    }

    /**
     * Convierte un objeto Date de BD a string "HH:MM" para el Frontend
     */
    private formatTime(date: Date | null): string | null {
        if (!date) return null;
        // Aseguramos que sea un objeto Date válido
        const d = new Date(date);
        // getUTCHours/Minutes si guardamos en UTC, o getHours/Minutes si es local.
        // Por simplicidad y consistencia con parseTime (local), usamos local.
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    /**
     * Mapea el objeto crudo de Prisma al DTO de respuesta
     */
    private mapToResponse(programa: any) {
        return {
            ...programa,
            horaInicio: this.formatTime(programa.horaInicio),
            horaFin: this.formatTime(programa.horaFin),
        };
    }
}

export default new ProgramaService();