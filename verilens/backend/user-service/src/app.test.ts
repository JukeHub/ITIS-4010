import request from 'supertest';
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
});