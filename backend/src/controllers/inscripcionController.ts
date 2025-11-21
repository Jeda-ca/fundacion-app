import { Request, Response, NextFunction } from 'express';
import inscripcionService from '../services/inscripcionService';
import { 
    CreateInscripcionDTO, 
    UpdateInscripcionDTO, 
    RetirarInscripcionDTO, 
    ListInscripcionesQueryDTO 
} from '../validators/inscripcionValidator';

class InscripcionController {
    
    // ============================================================================
    // CREAR INSCRIPCIÓN
    // ============================================================================
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ status: 'fail', message: 'Usuario no autenticado' });
            }

            // TypeScript sabe que req.body cumple con CreateInscripcionDTO gracias al middleware de validación
            const data = req.body as CreateInscripcionDTO;
            
            const nuevaInscripcion = await inscripcionService.create(data, userId);
            
            res.status(201).json({
                status: 'success',
                data: nuevaInscripcion
            });
        } catch (error) {
            next(error);
        }
    }

    // ============================================================================
    // LISTAR INSCRIPCIONES (FILTROS)
    // ============================================================================
    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const filters = req.query as unknown as ListInscripcionesQueryDTO;
            
            const inscripciones = await inscripcionService.list(filters);
            
            res.status(200).json({
                status: 'success',
                results: inscripciones.length,
                data: inscripciones
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
            const inscripcion = await inscripcionService.getById(id);
            
            res.status(200).json({
                status: 'success',
                data: inscripcion
            });
        } catch (error) {
            next(error);
        }
    }

    // ============================================================================
    // ACTUALIZAR DATOS (Observaciones / Fecha)
    // ============================================================================
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const data = req.body as UpdateInscripcionDTO;
            
            const inscripcionActualizada = await inscripcionService.update(id, data);
            
            res.status(200).json({
                status: 'success',
                data: inscripcionActualizada
            });
        } catch (error) {
            next(error);
        }
    }

    // ============================================================================
    // RETIRAR BENEFICIARIO
    // ============================================================================
    async retirar(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const data = req.body as RetirarInscripcionDTO;
            
            const inscripcionRetirada = await inscripcionService.retirar(id, data);
            
            res.status(200).json({
                status: 'success',
                message: 'Beneficiario retirado exitosamente del programa',
                data: inscripcionRetirada
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new InscripcionController();