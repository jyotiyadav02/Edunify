
const mysql = require('mysql2')
const { createPool } = mysql; // Destructure createPool from mysql2

// Create a connection pool
const db = createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'new_password',
  database: process.env.DB_NAME || 'edunify_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export { db }; // Exporting 'db' as a named export
