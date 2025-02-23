import request from 'supertest';
import express from 'express';
import app from './app';

describe('Express App', () => {
    describe('GET /', () => {
        it('should return welcome message and endpoints', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
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
    });

    describe('GET /health', () => {
        it('should return health status', async () => {
            const response = await request(app).get('/health');
            expect(response.status).toBe(200);
            expect(response.text).toBe('User service is running');
        });
    });

    describe('404 Handler', () => {
        it('should return 404 for unknown routes', async () => {
            const response = await request(app).get('/nonexistent');
            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: 'Route not found' });
        });
    });

    describe('Error Handler', () => {
        it('should handle internal server errors', async () => {
            // Create a route that throws an error
            const testApp = express();
            testApp.use(express.json());
            testApp.get('/error', () => {
                throw new Error('Test error');
            });
            testApp.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
                res.status(500).json({ error: 'Internal server error' });
            });

            const response = await request(testApp).get('/error');
            expect(response.status).toBe(500);
            expect(response.body).toEqual({ error: 'Internal server error' });
        });
    });
});