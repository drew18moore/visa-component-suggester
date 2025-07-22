import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test endpoint is working!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});