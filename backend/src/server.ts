import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middlewares globales
app.use(cors()); // Permitir peticiones desde el frontend
app.use(express.json()); // Parsear JSON en el body
app.use(express.urlencoded({ extended: true })); // Parsear form data

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    message: 'API Fundación Atma Namasté',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      docs: '/api/docs (próximamente)',
    },
  });
});

// Todas las rutas de la API bajo /api
app.use('/api', routes);

// Middleware de manejo de errores (debe ir al final)
app.use(errorHandler);

// Ruta 404 (si no coincide ninguna ruta anterior)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    path: req.originalUrl,
  });
});

// Levantar servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
  console.log(` Health check: http://localhost:${PORT}/api/health`);
  console.log(`  Base de datos: PostgreSQL`);
  console.log(` Modo: ${process.env.NODE_ENV || 'development'}`);
});