import app from './app'; // Importamos la app configurada

const PORT = process.env.PORT || 4000;

// Iniciar el servidor
const server = app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
  console.log(`   Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log('----------------------------------------------------');
});

// Manejo de cierreS
const gracefulShutdown = () => {
  console.log('Cerrando servidor...');
  server.close(() => {
    console.log('Servidor cerrado.');
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);