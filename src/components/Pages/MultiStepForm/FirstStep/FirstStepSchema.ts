import * as yup from "yup"

export const firstStepSchema = yup
  .object({
    nickname: yup
      .string()
      .required("Введите никнейм")
      .max(30, "Максимальная длина - 30 символов")
      .matches(/^[\u0410-\u044Fa-zA-Z0-9]+$/, "Никнейм не может содержать спецсимволы"),
    name: yup
      .string()
      .required("Введите имя")
      .max(50, "Максимальная длина - 50 символов")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Имя может содержать только буквы"),
    sername: yup
      .string()
      .required("Введите фамилию")
      .max(50, "Максимальная длина - 50 символов")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Фамилия может содержать только буквы"),
    sex: yup.string().test("sex-selector", "Выберите пол", (value, { path, createError }) => {
      if (!value || value === "other") {
        return createError({ path, message: "Выберите пол" })
      }
      return true
    }),
  })
  .required()
