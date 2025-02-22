import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authRoutes } from './routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});

export default app;