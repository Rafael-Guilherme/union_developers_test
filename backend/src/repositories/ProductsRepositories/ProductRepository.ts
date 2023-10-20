import { ICreateProductDTO } from "dtos";

import { prisma } from "database/prismaClient";

import { IProductsRepository } from "./IProductsRepository";

export class ProductRepository implements IProductsRepository {
  async create({ name, price, quantity, category }: ICreateProductDTO) {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        quantity,
        category,
      },
    });

    return product;
  }

  async findById(id: string) {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return product;
  }

  async update(id: string, data: ICreateProductDTO) {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data,
    });

    return product;
  }

  async remove(id: string) {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  }

  async findAll() {
    const products = await prisma.product.findMany();

    return products;
  }
}
