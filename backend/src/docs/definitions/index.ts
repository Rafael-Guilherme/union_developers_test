import { ServerError } from "./shared";

import {
  ProductCreateRequestDTO,
  ProductCreateResponseDTO,
  ProductFindAllResponseDTO,
  ProductGetByIdResponseDTO,
  ProductNotFoundError,
  ProductUpdateResponseDTO,
  ProductUpdateRequestDTO,
} from "./modules/products";

export const definitions = {
  ServerError,
  ProductCreateRequestDTO,
  ProductCreateResponseDTO,
  ProductFindAllResponseDTO,
  ProductGetByIdResponseDTO,
  ProductNotFoundError,
  ProductUpdateResponseDTO,
  ProductUpdateRequestDTO,
};
