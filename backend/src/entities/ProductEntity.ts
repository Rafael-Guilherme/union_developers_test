import { Decimal } from "@prisma/client/runtime";

export interface Product {
  id: string;
  name: string;
  price: Decimal;
  quantity: number;
  category: string;
  createtAt?: Date;
}
