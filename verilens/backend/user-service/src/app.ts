import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// Add debugging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Root route
app.get('/', (_req, res) => {
    res.json({
        message: 'Welcome to VeriLens API',
        endpoints: {
            health: '/health',
            auth: {
                register: '/auth/register',
                login: '/auth/login'
            }
        }
    });
});

// Health check endpoint
app.get('/health', (_req, res) => {
    console.log('Health check endpoint called');
    res.send('User service is running');
});

// Use authentication routes
app.use('/auth', authRoutes);

// 404 handler
app.use((_req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`User service listening on port ${port}`);
});

// Handle process termination
process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down gracefully...');
    process.exit(0);
});

export = app;