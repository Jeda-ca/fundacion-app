import { PrismaClient, RolUsuario, TipoPersona, Genero, TipoDocumento, EstadoUsuario, EstadoGeneral } from '@prisma/client';
import { hashPassword } from '../src/utils/password';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed con usuarios ADMIN y DOCENTE...');

  try {
    // 🔒 1) USUARIO ADMINISTRADOR
    console.log('👤 Creando usuario ADMIN...');
    
    const adminPersona = await prisma.persona.upsert({
      where: { numeroDocumento: 'CC-ADMIN-001' },
      update: {},
      create: {
        tipoDocumento: TipoDocumento.CC,
        numeroDocumento: 'CC-ADMIN-001',
        primerNombre: 'Administrador',
        segundoNombre: null,
        primerApellido: 'Principal',
        segundoApellido: 'Sistema',
        fechaNacimiento: new Date('1985-01-15'),
        genero: Genero.OTRO,
        direccion: 'Sede Administrativa - Valledupar',
        barrio: 'Centro',
        telefono: '3001234567',
        email: 'admin@fundacion.test',
        tipoPersona: TipoPersona.ADMINISTRATIVO,
        estado: EstadoGeneral.ACTIVO,
        observaciones: 'Usuario administrador del sistema - Creado por seed inicial',
        consentimientoInformado: true,
        // creadoPor: null (implícito) - Bootstrap del sistema
      },
    });

    const adminUser = await prisma.usuario.upsert({
      where: { username: 'admin' },
      update: {},
      create: {
        personaId: adminPersona.id,
        username: 'admin',
        email: 'admin@fundacion.test',
        password: await hashPassword('Admin123!'),
        rol: RolUsuario.ADMIN,
        estado: EstadoUsuario.ACTIVO,
      },
    });

    // 📚 2) USUARIO DOCENTE
    console.log('👨‍🏫 Creando usuario DOCENTE...');

    const docentePersona = await prisma.persona.upsert({
      where: { numeroDocumento: 'CC-DOC-001' },
      update: {},
      create: {
        tipoDocumento: TipoDocumento.CC,
        numeroDocumento: 'CC-DOC-001',
        primerNombre: 'María',
        segundoNombre: 'Isabel',
        primerApellido: 'García',
        segundoApellido: 'Rodríguez',
        fechaNacimiento: new Date('1990-03-22'),
        genero: Genero.FEMENINO,
        direccion: 'Calle 15 #10-25 Barrio San Jorge',
        barrio: 'San Jorge',
        telefono: '3109876543',
        email: 'docente@fundacion.test',
        tipoPersona: TipoPersona.DOCENTE,
        estado: EstadoGeneral.ACTIVO,
        observaciones: 'Docente responsable de programas académicos - Usuario de prueba',
        consentimientoInformado: true,
        creadoPor: adminUser.id, // ← Creado por el admin (ya existe)
      },
    });

    const docenteUser = await prisma.usuario.upsert({
      where: { username: 'docente1' },
      update: {},
      create: {
        personaId: docentePersona.id,
        username: 'docente1',
        email: 'docente@fundacion.test',
        password: await hashPassword('Docente123!'),
        rol: RolUsuario.DOCENTE,
        estado: EstadoUsuario.ACTIVO,
      },
    });

    console.log('✅ Seed completado exitosamente!');
    console.log('\n📋 CREDENCIALES DE PRUEBA:');
    console.log('┌─────────────────────────────────────────┐');
    console.log('│ 🔐 ADMIN                                │');
    console.log('│   Username: admin                       │');
    console.log('│   Password: Admin123!                   │');
    console.log('│   Rol: ADMIN                            │');
    console.log('├─────────────────────────────────────────┤');
    console.log('│ 👨‍🏫 DOCENTE                              │');
    console.log('│   Username: docente1                    │');
    console.log('│   Password: Docente123!                 │');
    console.log('│   Rol: DOCENTE                          │');
    console.log('└─────────────────────────────────────────┘');
    
    console.log('\n🚀 Usuarios listos para probar el login!');
    
  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('💥 Error fatal en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
