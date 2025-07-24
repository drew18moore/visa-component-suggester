import express from 'express';
import cors from 'cors';
import generateRouter from './routes/generate';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', generateRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});