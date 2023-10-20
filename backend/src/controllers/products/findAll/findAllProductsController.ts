import { Request, Response } from "express";

import { ProductRepository } from "repositories";

import { FindAllProductsUseCase } from "useCases/products";

export class FindAllProductsController {
  async handle(req: Request, res: Response) {
    try {
      const productsRepository = new ProductRepository();
      const findAllProductsUseCase = new FindAllProductsUseCase(
        productsRepository
      );

      const products = await findAllProductsUseCase.execute();

      return res.status(200).json(products);
    } catch {
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}
