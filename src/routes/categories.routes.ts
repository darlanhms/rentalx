import { Router } from 'express';
import CategoriesRepository from '../repositories/CategoriesRespository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return res.status(400).json({ message: 'Category already exists' });
    }

    categoriesRepository.create({ name, description });

    return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
    const categories = categoriesRepository.list();

    return res.status(200).json(categories);
});

export default categoriesRoutes;