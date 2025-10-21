import { PrismaClient } from '@prisma/client';

// Creamos una única instancia del cliente de Prisma
const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});

// Manejamos el cierre adecuado de la conexión cuando el proceso termina
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

export default prisma;
