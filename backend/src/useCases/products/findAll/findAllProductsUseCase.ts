import { IProductsRepository } from "repositories";

export class FindAllProductsUseCase {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute() {
    try {
      const products = await this.productsRepository.findAll();

      return products;
    } catch {
      throw new Error();
    }
  }
}
