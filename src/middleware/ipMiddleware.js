export function ipMiddleware(req, res, next) {
    let ip = req.headers['x-forwarded-for']?.split(',')[0] || 
             req.socket.remoteAddress || 
             '127.0.0.1';
    if (ip.includes('::ffff:')) ip = ip.replace('::ffff:', '');
    req.clientIp = ip;
    next();
}