import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';
import { sendSuccess } from '../utils/responses';
import { CreateUserDTO, ListUsersQueryDTO, UpdateUserDTO } from '../validators/userValidator';

class UserController {
    
    // ============================================================================
    // CREAR USUARIO
    // ============================================================================
    async create(req: Request, res: Response, next: NextFunction) {
        try {
        // TypeScript infiere el tipo gracias a los validadores, pero lo forzamos para claridad visual
        const data = req.body as CreateUserDTO;
        
        const result = await userService.create(data);
        
        return sendSuccess(res, 201, 'Usuario creado exitosamente', result);
        } catch (error) {
        // Pasamos el error al middleware global de manejo de errores
        next(error);
        }
    }

    // ============================================================================
    // LISTAR USUARIOS
    // ============================================================================
    async list(req: Request, res: Response, next: NextFunction) {
        try {
        const filters = req.query as unknown as ListUsersQueryDTO;
        
        const result = await userService.list(filters);
        
        return sendSuccess(res, 200, 'Lista de usuarios obtenida', result);
        } catch (error) {
        next(error);
        }
    }

    // ============================================================================
    // ACTUALIZAR USUARIO
    // ============================================================================
    async update(req: Request, res: Response, next: NextFunction) {
        try {
        const { id } = req.params;
        const data = req.body as UpdateUserDTO;
        
        const result = await userService.update(id, data);
        
        return sendSuccess(res, 200, 'Usuario actualizado exitosamente', result);
        } catch (error) {
        next(error);
        }
    }
}

export default new UserController();