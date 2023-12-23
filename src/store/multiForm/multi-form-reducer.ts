const initState: MultiFormStateType = {
  formData: {} as FormDataType,
  activeStep: 1,
}

// const initState = {
//   activeStep: 1,
//   formData: {
//     nickname: "",
//     name: "",
//     sername: "",
//     phone: "",
//     email: "",
//     sex: "Не выбрано",
//     advantages: [],
//     radio: 0,
//     checkbox: [],
//     about: "",
//   },
// }

enum SexEnum {
  MAN = "man",
  WOMAN = "woman",
}

type FormDataType = {
  nickname: string //max length 30, спец символы запрещены
  name: string //max length 50, только буквы
  sername: string //max length 50, только буквы
  phone: string //маска ввода (+7, (), -,), только цифры
  email: string //email валидация
  sex: SexEnum //селект
  advantages: string[] //только строки
  radio: number //радиобаттон
  checkbox: number[] //чекбокс
  about: string //max length 200, счетчик символов добавить
}

type MultiFormStateType = {
  activeStep: number
  formData: FormDataType
}
type ActionsType = ReturnType<typeof setActiveStep>
export const multiFormReducer = (state: MultiFormStateType = initState, action: ActionsType): MultiFormStateType => {
  switch (action.type) {
    case "MULTIFORM/SET-ACTIVE-STEP":
      return { ...state, activeStep: action.activeStep }
    default:
      return state
  }
}
export const setActiveStep = (activeStep: number) => ({ type: "MULTIFORM/SET-ACTIVE-STEP", activeStep }) as const
