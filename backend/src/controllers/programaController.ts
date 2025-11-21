import { Request, Response, NextFunction } from 'express';
import programaService from '../services/programaService';
import { ListProgramasQueryDTO } from '../validators/programaValidator';

class ProgramaController {
    
    // ============================================================================
    // CREAR PROGRAMA
    // ============================================================================
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            // El ID del usuario viene del token (inyectado por authMiddleware)
            // Necesitamos saber QUIÉN creó el programa para la auditoría
            const userId = req.user?.id;

            if (!userId) {
                return res.status(401).json({ 
                    status: 'fail',
                    message: 'No se pudo identificar al usuario autenticado' 
                });
            }

            const nuevoPrograma = await programaService.create(req.body, userId);

            res.status(201).json({
                status: 'success',
                data: nuevoPrograma
            });

        } catch (error) {
            next(error);
        }
    }

    // ============================================================================
    // LISTAR PROGRAMAS (CON FILTROS)
    // ============================================================================
    async list(req: Request, res: Response, next: NextFunction) {
        try {
            // Los query params llegan como strings desde Express.
            // Hacemos un casting seguro porque el Validator ya verificó que si existen, son válidos.
            const filters = req.query as unknown as ListProgramasQueryDTO;

            const programas = await programaService.list(filters);

            res.status(200).json({
                status: 'success',
                results: programas.length,
                data: programas
            });

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
            const programa = await programaService.getById(id);

            res.status(200).json({
                status: 'success',
                data: programa
            });

        } catch (error) {
            next(error);
        }
    }

    // ============================================================================
    // ACTUALIZAR PROGRAMA
    // ============================================================================
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            // req.body ya ha sido validado y limpiado por el validator
            const programaActualizado = await programaService.update(id, req.body);

            res.status(200).json({
                status: 'success',
                data: programaActualizado
            });

        } catch (error) {
            next(error);
        }
    }
}

export default new ProgramaController();