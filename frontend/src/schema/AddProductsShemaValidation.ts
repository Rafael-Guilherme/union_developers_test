import * as yup from "yup";

export const AddProductsSchemaValidation = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  category: yup.string().required("A categoria é obrigatória"),
  price: yup
    .string()
    .required("O preço é obrigatório")
    .test("isPositive", "O preço não pode ser negativo", (value) => {
      if (typeof value === "string") {
        const numericValue = parseFloat(value);
        return numericValue >= 0;
      }
      return true;
    }),
  quantity: yup
    .string()
    .required("A quantidade é obrigatória")
    .test("isPositive", "A quantidade não pode ser negativa", (value) => {
      if (typeof value === "string") {
        const numericValue = parseFloat(value);
        return numericValue >= 0;
      }
      return true;
    }),
});
