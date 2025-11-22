import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10; // Nivel de complejidad del hash

/**
 * Hashea una contraseña
 */
export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Verifica si una contraseña coincide con su hash
 */
export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};