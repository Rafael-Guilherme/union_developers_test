import { ICreateProductDTO } from "dtos";
import { Request, Response } from "express";

import { ProductRepository } from "repositories";

import { CreateProductUseCase } from "useCases/products";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { name, price, quantity, category } = req.body as ICreateProductDTO;

      const productsRepository = new ProductRepository();
      const createUserUseCase = new CreateProductUseCase(productsRepository);

      const product = await createUserUseCase.execute({
        name,
        price,
        quantity,
        category,
      });

      return res.status(201).json(product);
    } catch {
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}
