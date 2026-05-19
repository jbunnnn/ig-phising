import pkg from "pg";
import dotenv from "dotenv";

dotenv.config()

const { Pool } = pkg;

const pool = new Pool ({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST || process.env.HOST,
    database:
    process.env.NODE_ENV === "test"
        ? process.env.DB_NAME_TEST
        : process.env.DB_NAME,
})

export default pool;

