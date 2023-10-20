import { ICreateProductDTO } from "dtos";
import { IProductsRepository } from "repositories";

export class CreateProductUseCase {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute({ name, price, quantity, category }: ICreateProductDTO) {
    try {
      const product = await this.productsRepository.create({
        name,
        price,
        quantity,
        category,
      });

      return product;
    } catch {
      throw new Error();
    }
  }
}
