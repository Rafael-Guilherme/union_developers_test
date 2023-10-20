import swaggerAutogen from "swagger-autogen";

import { doc } from "docs";

const outputFile = "../docs/swagger-output.json";
const endpointsFiles = ["../routes/index.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
