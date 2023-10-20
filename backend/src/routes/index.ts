import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../docs/swagger-output.json";

import { productsRoutes } from "./products";

export const router = Router();

router.get("/", (_, res) => {
  return res.json({ message: "Hello World" });
});

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

router.use("/products", productsRoutes);
