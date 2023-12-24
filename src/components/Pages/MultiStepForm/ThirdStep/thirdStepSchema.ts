import * as yup from "yup"

export const thirdStepSchema = yup
  .object({
    about: yup.string().test("maxCharactersNoSpaces", "Максимальная длина - 200 символов", (value) => {
      if (value) {
        const stringWithoutSpaces = value.replace(/\s/g, "")
        return stringWithoutSpaces.length <= 200
      }
    }),
  })
  .required()
