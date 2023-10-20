import { Router } from "express";

import {
  CreateProductController,
  FindProductByIdController,
  UpdateProductController,
  RemoveProductController,
  FindAllProductsController,
} from "controllers/products";

const createProductController = new CreateProductController();
const findProductByIdController = new FindProductByIdController();
const updateProductController = new UpdateProductController();
const removeProductController = new RemoveProductController();
const findAllProductsController = new FindAllProductsController();

export const productsRoutes = Router();

productsRoutes.post(
  "/",
  /* 
  #swagger.tags = ['Products']
  #swagger.summary = 'Endpoint for create a new product'
  #swagger.requestBody = {
    schema: { $ref: "#/definitions/ProductCreateRequestDTO" }
  } 
  #swagger.responses[201] = {
    description: "Created",
    content: {
      "application/json": {
        schema: { $ref: "#/definitions/ProductCreateResponseDTO" }
      }           
    }
  }
  #swagger.responses[500] = {
    description: "Server error",
    content: {
      "application/json": {
        schema: { $ref: "#/definitions/ServerError" }
      }           
    }
  }     
*/
  createProductController.handle
);

productsRoutes.get(
  "/",
  /* 
    #swagger.tags = ['Products']
    #swagger.summary = 'Endpoint for get all product'
    #swagger.responses[200] = {
      description: "Created",
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/ProductFindAllResponseDTO" }
        }           
      }
    }
    #swagger.responses[500] = {
      description: "Server error",
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/ServerError" }
        }           
      }
    }     
  */
  findAllProductsController.handle
);
productsRoutes.get(
  "/:id",
  /* 
    #swagger.tags = ['Products']
    #swagger.summary = 'Endpoint for get product by id'
    #swagger.parameters['id'] = { type: 'string'}
    #swagger.responses[200] = {
      description: "Ok",
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/ProductGetByIdResponseDTO" }
        }           
      }
    }
    #swagger.responses[404] = {
      description: "Not found",
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/ProductNotFoundError" }
        }           
      }
    }     
    #swagger.responses[500] = {
      description: "Server error",
      content: {
        "application/json": {
          schema: { $ref: "#/definitions/ServerError" }
        }           
      }
    }     
  */
  findProductByIdController.handle
);
productsRoutes.put(
  "/:id",
  /* 
      #swagger.tags = ['Products']
      #swagger.summary = 'Endpoint for update product'
      #swagger.requestBody = {
        schema: { $ref: "#/definitions/ProductUpdateRequestDTO" }
      }
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[200] = {
        description: "Ok",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ProductUpdateResponseDTO" }
          }           
        }
      }    
      #swagger.responses[500] = {
        description: "Server error",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ServerError" }
          }           
        }
      }     
    */
  updateProductController.handle
);
productsRoutes.delete(
  "/:id",
  /* 
      #swagger.tags = ['Products']
      #swagger.summary = 'Endpoint for remove product'
      #swagger.parameters['id'] = { type: 'string'}
      #swagger.responses[204] = {
        description: "No Content",
      }       
      #swagger.responses[500] = {
        description: "Server error",
        content: {
          "application/json": {
            schema: { $ref: "#/definitions/ServerError" }
          }           
        }
      }     
    */
  removeProductController.handle
);
