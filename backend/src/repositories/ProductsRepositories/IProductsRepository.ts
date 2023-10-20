import { ICreateProductDTO, IUpdateProductDTO } from "dtos";

import { Product } from "entities";

export interface IProductsRepository {
  create: (data: ICreateProductDTO) => Promise<Product>;
  findById: (id: string) => Promise<Product | null>;
  update: (id: string, data: IUpdateProductDTO) => Promise<Product>;
  remove: (id: string) => Promise<Product>;
  findAll: () => Promise<Product[]>;
}
