import * as yup from "yup";

export const AddProductsSchemaValidation = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  category: yup.string().required("A categoria é obrigatória"),
  price: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "O preço deve ser um número válido")
    .transform((value, originalValue) => {
      if (typeof originalValue === "string") {
        return originalValue.replace(/[^0-9.]/g, "");
      }
      return value;
    })
    .test("formattedPrice", "Formato de preço inválido", (value) => {
      if (typeof value === "string") {
        const parts = value.split(".");
        if (parts[1] && parts[1].length > 2) {
          return false;
        }
        return true;
      }
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
