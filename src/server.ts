import express from 'express';
import categoriesRoutes from './routes/categories.routes';
import specificationsRoutes from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.get('/', (req, res) => {
    res.json(new Date());
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on port %d', process.env.PORT);
});
