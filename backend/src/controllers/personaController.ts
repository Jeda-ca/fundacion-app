import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import personaService from '../services/personaService';
import { sendSuccess } from '../utils/responses';
import {
    CreatePersonaDTO, 
    UpdatePersonaDTO, 
    ListPersonasQueryDTO,
} from '../validators/personaValidator';

class PersonaController {
    // ============================================================================
    // CREAR
    // ============================================================================
    async create(req: Request, res: Response, next: NextFunction) {
        try {
        const creadorId = req.user!.id;
        const personaData = req.body as CreatePersonaDTO;

        const nuevaPersona = await personaService.create(personaData, creadorId);

        return sendSuccess(
            res,
            201,
            'Persona creada exitosamente',
            nuevaPersona
        );
        } catch (error) {
        next(error);
        }
    }

    // ============================================================================
    // LISTAR
    // ============================================================================
    async list(req: Request, res: Response, next: NextFunction) {
        try {
        // Zod ya validó y convirtió los tipos en el middleware validateListPersonas
        const filters = req.query as unknown as ListPersonasQueryDTO;

        const resultado = await personaService.list(filters);

        return sendSuccess(
            res,
            200,
            'Listado de personas obtenido correctamente',
            resultado
        );
        } catch (error) {
        next(error);
        }
    }

    // ============================================================================
    // OBTENER POR ID
    // ============================================================================
    async getById(req: Request, res: Response, next: NextFunction) {
        try {
        const { id } = req.params;

        const includeRelationsSchema = z.coerce.boolean().optional().default(false);
        const includeRelations = includeRelationsSchema.parse(req.query.includeRelations);

        let persona;
        if (includeRelations) {
            // Trae relaciones complejas (tutores, programas, etc.)
            persona = await personaService.getByIdWithRelations(id);
        } else {
            // Trae solo datos básicos
            persona = await personaService.getById(id);
        }

        return sendSuccess(
            res,
            200,
            'Información de la persona obtenida correctamente',
            persona
        );
        } catch (error) {
        next(error);
        }
    }

    // ============================================================================
    // ACTUALIZAR
    // ============================================================================
    async update(req: Request, res: Response, next: NextFunction) {
        try {
        const { id } = req.params;
        const modificadorId = req.user!.id;
        const updateData = req.body as UpdatePersonaDTO;

        const personaActualizada = await personaService.update(
            id,
            updateData,
            modificadorId
        );

        return sendSuccess(
            res,
            200,
            'Persona actualizada exitosamente',
            personaActualizada
        );
        } catch (error) {
        next(error);
        }
    }

    // ============================================================================
    // ELIMINAR (SOFT DELETE)
    // ============================================================================
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
        const { id } = req.params;
        const modificadorId = req.user!.id;

        const personaInactivada = await personaService.delete(id, modificadorId);

        return sendSuccess(
            res,
            200,
            'Persona inactivada exitosamente', // Acción completada -> Exitosamente
            personaInactivada
        );
        } catch (error) {
        next(error);
        }
    }
}

export default new PersonaController();