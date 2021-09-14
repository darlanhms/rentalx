import { Router } from 'express';
import CategoriesRepository from '../repositories/CategoriesRespository';
import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;

    const createCategory = new CreateCategoryService(categoriesRepository);

    createCategory.execute({ name, description });

    return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
    const categories = categoriesRepository.list();

    return res.status(200).json(categories);
});

export default categoriesRoutes;
