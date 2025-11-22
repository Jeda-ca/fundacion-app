import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

// Cargar variables de entorno
dotenv.config();

const app: Application = express();

// Middlewares globales
app.use(cors()); // Permitir peticiones desde el frontend (http://localhost:5173)
app.use(express.json()); // Parsear JSON en el body
app.use(express.urlencoded({ extended: true })); // Parsear form data

// Ruta raíz de la API (para verificar que funciona)
app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'API Fundación Atma Namasté v1.0',
    status: 'OK',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      auth: '/api/auth'
    }
  });
});

// Todas las rutas de la API bajo /api
app.use('/api', routes);

// Middleware de manejo de errores (debe ir después de las rutas)
app.use(errorHandler);

// Ruta 404 (si no coincide ninguna ruta anterior)
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    path: req.originalUrl,
  });
});

export default app;