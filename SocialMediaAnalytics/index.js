import express from 'express';
import analyticsRoutes from './routes/analyticsRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', analyticsRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});