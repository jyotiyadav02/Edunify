
import { createPool } from 'mysql2/promise';
import multer from 'multer';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'new_password',
  database: 'edunify_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const storage = multer.diskStorage({
  destination: './public/schoolImages',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
});

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing, we will handle it with multer
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        console.error('Multer error:', err);
        return res.status(400).json({ error: 'Image could not be uploaded' });
      }

      const { name, address, city, state, contact, email_id } = req.body;
      const imagePath = `/schoolImages/${req.file.filename}`;

      try {
        const connection = await pool.getConnection();
        const query = 'INSERT INTO schools (name, address, city, state, contact, email_id, image_path) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await connection.query(query, [name, address, city, state, contact, email_id, imagePath]);
        connection.release();

        console.log('Insert result:', result);

        return res.status(200).json({ message: 'Data received and saved successfully' });
      } catch (error) {
        console.error('Failed to save data to database', error);
        return res.status(500).json({ error: 'Failed to save data to database' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


