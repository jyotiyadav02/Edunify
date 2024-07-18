const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// MySQL connection configuration
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example API route
app.get('/api/getSchools', (req, res) => {
  // Perform MySQL query example
  connection.query('SELECT * FROM schools', (error, results, fields) => {
    if (error) {
      console.error('Error fetching schools:', error);
      res.status(500).json({ error: 'Error fetching schools' });
      return;
    }
    res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export connection for use in API routes
module.exports = connection;
