import CategoriesRepository from '../repositories/CategoriesRespository';

interface IRequest {
    name: string;
    description: string;
}

export default class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error('Category already exists!');
        }

        this.categoriesRepository.create({ name, description });
    }
}