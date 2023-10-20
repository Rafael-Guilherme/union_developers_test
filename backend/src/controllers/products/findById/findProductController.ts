import { Request, Response } from "express";

import { ProductRepository } from "repositories";

import { FindProductByIdUseCase } from "useCases/products";

export class FindProductByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const productsRepository = new ProductRepository();
      const findProductByIdUseCase = new FindProductByIdUseCase(
        productsRepository
      );

      const product = await findProductByIdUseCase.execute(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      return res.status(200).json(product);
    } catch {
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}
