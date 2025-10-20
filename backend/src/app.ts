// src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Cargar variables de entorno (solo para app, server.ts lo hará también)
dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors()); // Permite peticiones de otros dominios (nuestro frontend)
app.use(express.json()); // Permite a Express entender JSON en el body

// Ruta de prueba (la moveremos pronto)
app.get('/', (req, res) => {
  res.json({
    message: '🚀 API Fundación Atma Namasté v1.0',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

export default app;