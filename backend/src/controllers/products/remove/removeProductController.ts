import { Request, Response } from "express";

import { ProductRepository } from "repositories";

import { RemoveProductUseCase } from "useCases/products";

export class RemoveProductController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const productsRepository = new ProductRepository();
      const removeProductUseCase = new RemoveProductUseCase(productsRepository);

      await removeProductUseCase.execute(id);

      return res.status(204).json();
    } catch {
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  }
}
