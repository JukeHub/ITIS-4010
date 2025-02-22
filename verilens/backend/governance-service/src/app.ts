import express from 'express';
import bodyParser from 'body-parser';
import governanceRoutes from './routes/governanceRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/governance', governanceRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Governance service running on port ${PORT}`);
});

export default app;