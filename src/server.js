import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const HOST = process.env.HOST || (
  process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost"
);

const server = app.listen(PORT,HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});