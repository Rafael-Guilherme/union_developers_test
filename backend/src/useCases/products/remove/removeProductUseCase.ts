import { IProductsRepository } from "repositories";

export class RemoveProductUseCase {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute(id: string) {
    try {
      const product = await this.productsRepository.remove(id);

      return product;
    } catch {
      throw new Error();
    }
  }
}
