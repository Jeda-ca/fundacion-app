import userRepository from '../repositories/userRepository';
import personaRepository from '../repositories/personaRepository';
import { CreateUserDTO, ListUsersQueryDTO, UpdateUserDTO } from '../validators/userValidator';
import { AppError } from '../middlewares/errorHandler';
import { hashPassword } from '../utils/password';

class UserService {
    // ============================================================================
    // CREAR USUARIO
    // ============================================================================
    async create(data: CreateUserDTO) {
        // 1. Verificar que la Persona exista en la base de datos
        const persona = await personaRepository.findById(data.personaId);
        if (!persona) {
        throw new AppError('La persona especificada no existe', 404);
        }

        // 2. Verificar que esa Persona NO tenga ya un usuario (Relación 1:1)
        // Esto evita que una misma persona física tenga múltiples cuentas de acceso.
        const usuarioExistenteDePersona = await userRepository.findByPersonaId(data.personaId);
        if (usuarioExistenteDePersona) {
        throw new AppError(
            `Esta persona ya tiene un usuario asignado (Usuario actual: ${usuarioExistenteDePersona.username})`,
            409 // 409 Conflict
        );
        }

        // 3. Verificar unicidad de Username (Login ID)
        const usuarioPorUsername = await userRepository.findByUsername(data.username);
        if (usuarioPorUsername) {
        throw new AppError(`El nombre de usuario '${data.username}' ya está en uso`, 409);
        }

        // 4. Verificar unicidad de Email
        // Es crítico verificar esto aunque el login sea por username, para notificaciones y recuperación.
        const usuarioPorEmail = await userRepository.findByEmail(data.email);
        if (usuarioPorEmail) {
        throw new AppError(`El email '${data.email}' ya está asociado a otra cuenta de usuario`, 409);
        }

        // 5. Encriptar la contraseña (Hashing)
        const hashedPassword = await hashPassword(data.password);

        // 6. Crear el usuario en BD
        const nuevoUsuario = await userRepository.create(data, hashedPassword);

        // 7. Retornar el usuario SIN la contraseña (Sanitización)
        // Desestructuramos para separar 'password' del resto de propiedades
        const { password, ...usuarioSinPass } = nuevoUsuario;
        return usuarioSinPass;
    }

    // ============================================================================
    // LISTAR USUARIOS
    // ============================================================================
    async list(filters: ListUsersQueryDTO) {
        // Obtenemos los usuarios aplicando los filtros del repositorio (rol, estado)
        const usuarios = await userRepository.findAll(filters.rol, filters.estado);

        // Mapeamos el array para eliminar el campo password de cada resultado
        return usuarios.map((u) => {
        const { password, ...resto } = u;
        return resto;
        });
    }

    // ============================================================================
    // ACTUALIZAR USUARIO
    // ============================================================================
    async update(id: string, data: UpdateUserDTO) {
        // 1. Verificar existencia del usuario
        const usuario = await userRepository.findById(id);
        if (!usuario) {
        throw new AppError('Usuario no encontrado', 404);
        }

        const updateData: any = { ...data };

        // 2. Si se envía una nueva contraseña, hay que hashearla
        if (data.password) {
        updateData.password = await hashPassword(data.password);
        }

        // 3. Actualizar en BD
        const usuarioActualizado = await userRepository.update(id, updateData);
        
        // 4. Sanitizar respuesta
        const { password, ...usuarioSinPass } = usuarioActualizado;
        return usuarioSinPass;
    }
}

export default new UserService();