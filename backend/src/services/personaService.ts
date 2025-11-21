import personaRepository from '../repositories/personaRepository';
import {
  CreatePersonaDTO,
  UpdatePersonaDTO,
  ListPersonasQueryDTO,
} from '../validators/personaValidator';
import { AppError } from '../middlewares/errorHandler';
import { Persona } from '@prisma/client';

// Define el tipo de dato "enriquecido" que devolveremos
type EnrichedPersona<T> = T & { nombreCompleto: string; edad: number };

/**
 * Capa de servicio para la lógica de negocio de Personas.
 */
class PersonaService {
  // ============================================================================
  // CREAR PERSONA
  // ============================================================================
  async create(
    data: CreatePersonaDTO,
    creadorId: string
  ): Promise<EnrichedPersona<Persona>> {
    // 1. Validar reglas de negocio (duplicados)
    const existeDocumento = await personaRepository.findByDocumento(
      data.numeroDocumento
    );
    if (existeDocumento) {
      throw new AppError(
        `El documento ${data.numeroDocumento} ya está registrado`,
        409
      );
    }

    if (data.email) {
      const existeEmail = await personaRepository.findByEmail(data.email);
      if (existeEmail) {
        throw new AppError(`El email ${data.email} ya está registrado`, 409);
      }
    }

    // 2. Validar edad según tipo de persona (de tu versión)
    const edad = this.calcularEdad(data.fechaNacimiento);

    if (data.tipoPersona === 'MENOR' && edad >= 18) {
      throw new AppError(
        `La persona tiene ${edad} años. Los menores deben tener menos de 18 años`,
        400
      );
    }

    if (data.tipoPersona !== 'MENOR' && edad < 18) {
      throw new AppError(
        `La persona tiene ${edad} años. Debe registrarse como MENOR`,
        400
      );
    }

    // 3. Crear en la base de datos
    // Nota: La validación de 'consentimientoInformado' ya la hizo Zod.
    const persona = await personaRepository.create(data, creadorId);

    // 4. Retornar con campos enriquecidos
    return this.enrichPersonaData(persona);
  }

  // ============================================================================
  // OBTENER PERSONA
  // ============================================================================

  /**
   * Obtiene una persona por ID con campos calculados
   */
  async getById(id: string): Promise<EnrichedPersona<Persona>> {
    const persona = await personaRepository.findById(id);

    if (!persona) {
      throw new AppError('Persona no encontrada', 404);
    }

    return this.enrichPersonaData(persona);
  }

  /**
   * Obtiene una persona por ID con todas sus relaciones
   */
  async getByIdWithRelations(
    id: string
  ): Promise<EnrichedPersona<Persona & { [key: string]: any }>> {
    const persona = await personaRepository.findByIdWithRelations(id);

    if (!persona) {
      throw new AppError('Persona no encontrada', 404);
    }

    // Prisma 'include' devuelve un tipo complejo, lo enriquecemos
    return this.enrichPersonaData(persona);
  }

  // ============================================================================
  // LISTAR PERSONAS
  // ============================================================================

  /**
   * Lista personas con filtros y paginación
   */
  async list(filters: ListPersonasQueryDTO) {
    const result = await personaRepository.findAllPaginado(filters);

    // Enriquecer cada persona de la lista
    const personasEnriquecidas = result.data.map((persona) =>
      // El 'select' del repo nos da los campos necesarios para esto
      this.enrichPersonaData(persona)
    );

    return {
      data: personasEnriquecidas,
      pagination: result.pagination,
    };
  }

  // ============================================================================
  // ACTUALIZAR PERSONA
  // ============================================================================

  /**
   * Actualiza una persona existente con validaciones
   */
  async update(
    id: string,
    data: UpdatePersonaDTO,
    modificadorId: string
  ): Promise<EnrichedPersona<Persona>> {
    // 1. Verificar que la persona existe
    const personaExistente = await personaRepository.findById(id);
    if (!personaExistente) {
      throw new AppError('Persona no encontrada', 404);
    }

    // 2. Si se actualiza el email, verificar que no esté en uso por otra persona
    if (data.email && data.email !== personaExistente.email) {
      const personaConEmail = await personaRepository.findByEmail(data.email);
      if (personaConEmail && personaConEmail.id !== id) {
        throw new AppError(
          `El email ${data.email} ya está en uso por otra persona`,
          409
        );
      }
    }

    // 3. Si se actualiza la fecha de nacimiento, validar coherencia con tipo
    if (data.fechaNacimiento) {
      const edad = this.calcularEdad(data.fechaNacimiento);

      if (personaExistente.tipoPersona === 'MENOR' && edad >= 18) {
        throw new AppError(
          `La persona tiene ${edad} años. Los menores deben tener menos de 18 años`,
          400
        );
      }

      if (personaExistente.tipoPersona !== 'MENOR' && edad < 18) {
        throw new AppError(
          `La persona tiene ${edad} años. No puede ser registrada como adulto`,
          400
        );
      }
    }

    // 4. Actualizar persona
    const personaActualizada = await personaRepository.update(
      id,
      data,
      modificadorId
    );

    return this.enrichPersonaData(personaActualizada);
  }

  // ============================================================================
  // ELIMINAR PERSONA (Soft Delete)
  // ============================================================================

  /**
   * Inactiva una persona (no elimina físicamente)
   */
  async delete(
    id: string,
    modificadorId: string
  ): Promise<EnrichedPersona<Persona>> {
    // 1. Verificar que la persona existe
    const persona = await personaRepository.findById(id);

    if (!persona) {
      throw new AppError('Persona no encontrada', 404);
    }

    // 2. Verificar que no esté ya inactiva (de tu versión)
    if (persona.estado === 'INACTIVO') {
      throw new AppError('La persona ya está inactiva', 400);
    }

    // 3. Soft delete
    const personaInactivada = await personaRepository.softDelete(
      id,
      modificadorId
    );

    return this.enrichPersonaData(personaInactivada);
  }

  // ============================================================================
  // UTILIDADES PRIVADAS (de tu versión)
  // ============================================================================

  /**
   * Calcula la edad exacta a partir de una fecha de nacimiento
   */
  private calcularEdad(fechaNacimiento: Date): number {
    // Zod ya nos entrega un objeto Date, no necesitamos string check
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  }

  /**
   * Construye el nombre completo concatenando nombres y apellidos
   */
  private construirNombreCompleto(persona: {
    primerNombre: string;
    segundoNombre?: string | null;
    primerApellido: string;
    segundoApellido?: string | null;
  }): string {
    const partes = [
      persona.primerNombre,
      persona.segundoNombre,
      persona.primerApellido,
      persona.segundoApellido,
    ].filter(Boolean); // Filtra valores null/undefined/""

    return partes.join(' ');
  }

  /**
   * Enriquece los datos de una persona con campos calculados
   */
  private enrichPersonaData<
    T extends {
      fechaNacimiento: Date;
      primerNombre: string;
      segundoNombre?: string | null;
      primerApellido: string;
      segundoApellido?: string | null;
    }
  >(persona: T): EnrichedPersona<T> {
    return {
      ...persona,
      nombreCompleto: this.construirNombreCompleto(persona),
      edad: this.calcularEdad(persona.fechaNacimiento),
    };
  }
}

export default new PersonaService();    