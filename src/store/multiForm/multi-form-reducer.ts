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

type FormDataType = {
  nickname: string //max length 30, спец символы запрещены
  name: string //max length 50, только буквы
  sername: string //max length 50, только буквы
  phone: string //маска ввода (+7, (), -,), только цифры
  email: string //email валидация
  sex: "woman" | "man" //селект
  advantages: string[] //только строки
  radio: number //радиобаттон
  checkbox: number[] //чекбокс
  about: string //max length 200, счетчик символов добавить
}

type MultiFormStateType = {
  activeStep: number
  formData: FormDataType
}
type ActionsType =
  | ReturnType<typeof setActiveStep>
  | ReturnType<typeof setName>
  | ReturnType<typeof setSername>
  | ReturnType<typeof setSex>
  | ReturnType<typeof setNickname>
export const multiFormReducer = (state: MultiFormStateType = initState, action: ActionsType): MultiFormStateType => {
  switch (action.type) {
    case "MULTIFORM/SET-ACTIVE-STEP":
      return { ...state, activeStep: action.activeStep }
    case "MULTIFORM/SET-NAME":
      return { ...state, formData: { ...state.formData, name: action.name } }
    case "MULTIFORM/SET-SERNAME":
      return { ...state, formData: { ...state.formData, sername: action.sername } }
    case "MULTIFORM/SET-SEX":
      return { ...state, formData: { ...state.formData, sex: action.sex } }
    case "MULTIFORM/SET-NICKNAME":
      return { ...state, formData: { ...state.formData, nickname: action.nickname } }
    default:
      return state
  }
}
export const setActiveStep = (activeStep: number) => ({ type: "MULTIFORM/SET-ACTIVE-STEP", activeStep }) as const
export const setName = (name: string) => ({ type: "MULTIFORM/SET-NAME", name }) as const
export const setSername = (sername: string) => ({ type: "MULTIFORM/SET-SERNAME", sername }) as const
export const setSex = (sex: "woman" | "man") => ({ type: "MULTIFORM/SET-SEX", sex }) as const
export const setNickname = (nickname: string) => ({ type: "MULTIFORM/SET-NICKNAME", nickname }) as const
