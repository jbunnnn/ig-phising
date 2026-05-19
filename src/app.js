import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import { ipMiddleware } from './middleware/ipMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import './config/db.js';

dotenv.config();

// _dirname untuk ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Cors
app.use(cors());

// parsing body json ke body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files (folder public)
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// IP Middleware
app.use(ipMiddleware);

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// auth routes 
app.use('/', authRoutes);

export default app;