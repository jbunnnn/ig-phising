import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import { ipMiddleware } from '../middleware/ipMiddleware.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function configureExpress(app) {
    // Middleware dasar
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    // Static files
    const publicPath = path.join(__dirname, '../../public');
    app.use(express.static(publicPath));
    
    // IP Middleware
    app.use(ipMiddleware);
    
    // Homepage
    app.get('/', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });
    
    return app;
}