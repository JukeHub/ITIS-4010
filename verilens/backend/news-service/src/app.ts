import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { newsRoutes } from './routes/newsRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/news', newsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`News service running on port ${PORT}`);
});

export default app;