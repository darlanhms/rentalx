import express from 'express';
import categoriesRoutes from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.get('/', (req, res) => {
    res.json(new Date());
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on port %d', process.env.PORT);
});
