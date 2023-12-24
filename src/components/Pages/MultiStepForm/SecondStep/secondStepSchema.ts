import * as yup from "yup"

export const secondStepSchema = yup.object().shape({
  advantages: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Поле обязательно для заполнения"),
    }),
  ),
  checkbox: yup.array(),
  radio: yup.string(),
})
