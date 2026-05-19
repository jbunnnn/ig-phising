import pool from "../config/db.js";

export const saveData = (username, password, ip, userAgent) => {
    pool.query(
        `INSERT INTO data_user (username, password, ip, user_agent, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [username, password, ip, userAgent]
    ).catch(console.error); 
};