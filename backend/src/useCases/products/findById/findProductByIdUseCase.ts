import { IProductsRepository } from "repositories";

export class FindProductByIdUseCase {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute(id: string) {
    try {
      const product = await this.productsRepository.findById(id);

      return product;
    } catch {
      throw new Error();
    }
  }
}
