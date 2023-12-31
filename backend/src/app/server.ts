import * as dotenv from "dotenv";

import express from "express";

import cors from "cors";

import { router } from "routes";

dotenv.config();

export const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
