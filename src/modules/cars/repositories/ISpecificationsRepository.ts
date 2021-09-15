import Specification from '../model/Specification';

export interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

export default interface ISpecificationsRepository {
    create(dto: ICreateSpecificationDTO): void;
    findByName(name: string): Specification | undefined;
}
