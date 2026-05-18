import express from 'express';
import { configureExpress } from './config/express.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Konfigurasi express (middleware, static, dll)
configureExpress(app);

// Routes
app.use('/', authRoutes);

export default app;