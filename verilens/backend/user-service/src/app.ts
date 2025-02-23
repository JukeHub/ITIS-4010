import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { authRoutes } from './routes/authRoutes';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get('/health', (_req: any, res: { send: (arg0: string) => void; }) => {
    res.send('User service is running');
});

// Use authentication routes
app.use('/auth', authRoutes);

// Example usage of environment variables:
console.log(`JWT Secret: ${process.env.JWT_SECRET}`);

// Start your server
app.listen(port, '0.0.0.0', () => {
    console.log(`User service listening on port ${port}`);
});