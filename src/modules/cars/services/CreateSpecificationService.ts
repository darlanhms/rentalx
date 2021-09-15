import ISpecificationsRepository from '../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

export default class CreateSpecificationService {
    constructor(private specificationsRepo: ISpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepo.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }

        this.specificationsRepo.create({
            name,
            description,
        });
    }
}
