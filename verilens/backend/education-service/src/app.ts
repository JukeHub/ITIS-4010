import express from 'express';
import bodyParser from 'body-parser';
import educationRoutes from './routes/educationRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/education', educationRoutes);

app.listen(PORT, () => {
    console.log(`Education service is running on port ${PORT}`);
});

export default app;