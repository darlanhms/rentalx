import Category from '../model/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export default class CategoriesRepository {
    private categories: Array<Category>;

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Array<Category> {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find(categoryToCompare => categoryToCompare.name === name);

        return category;
    }
}
