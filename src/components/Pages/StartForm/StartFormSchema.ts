import * as yup from "yup"

export const startFormSchema = yup
  .object({
    phone: yup.string().length(18, "Введите корректный номер телефона"),
    email: yup.string().email("Введите корректный email").required("Введите email"),
  })
  .required()
