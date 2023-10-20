import { IUpdateProductDTO } from "dtos";
import { Request, Response } from "express";

import { ProductRepository } from "repositories";

import { UpdateProductUseCase } from "useCases/products";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, price, quantity, category } = req.body as IUpdateProductDTO;

      const productsRepository = new ProductRepository();
      const updateProductUseCase = new UpdateProductUseCase(productsRepository);

      const product = await updateProductUseCase.execute(id, {
        name,
        price,
        quantity,
        category,
      });

      return res.status(200).json(product);
    } catch {
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}
