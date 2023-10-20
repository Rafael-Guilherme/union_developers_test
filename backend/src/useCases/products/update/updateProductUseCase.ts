import { IUpdateProductDTO } from "dtos";
import { IProductsRepository } from "repositories";

export class UpdateProductUseCase {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute(id: string, data: IUpdateProductDTO) {
    try {
      const product = await this.productsRepository.update(id, data);

      return product;
    } catch {
      throw new Error();
    }
  }
}
