export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

const initState: MultiFormStateType = {
  formData: {} as FormDataType,
  activeStep: 1,
  status: "idle",
}

export type FormDataType = {
  nickname: string
  name: string
  sername: string
  phone: string
  email: string
  sex: "woman" | "man"
  advantages: string[]
  radio: number
  checkbox: number[]
  about: string
}

type MultiFormStateType = {
  activeStep: number
  formData: FormDataType
  status: RequestStatusType
}
type ActionsType =
  | ReturnType<typeof setActiveStep>
  | ReturnType<typeof setName>
  | ReturnType<typeof setSername>
  | ReturnType<typeof setSex>
  | ReturnType<typeof setNickname>
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setPhone>
  | ReturnType<typeof setRadio>
  | ReturnType<typeof setCheckbox>
  | ReturnType<typeof setAdvantages>
  | ReturnType<typeof setAbout>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof clearForm>
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
    case "MULTIFORM/SET-EMAIL":
      return { ...state, formData: { ...state.formData, email: action.email } }
    case "MULTIFORM/SET-PHONE":
      return { ...state, formData: { ...state.formData, phone: action.phone } }
    case "MULTIFORM/SET-CHECKBOX":
      return { ...state, formData: { ...state.formData, checkbox: action.checkbox } }
    case "MULTIFORM/SET-RADIO":
      return { ...state, formData: { ...state.formData, radio: action.radio } }
    case "MULTIFORM/SET-ADVANTAGES":
      return {
        ...state,
        formData: { ...state.formData, advantages: [...action.advantages] },
      }
    case "MULTIFORM/SET-ABOUT":
      return {
        ...state,
        formData: { ...state.formData, about: action.about },
      }
    case "MULTIFORM/SET-REQUEST-STATUS":
      return {
        ...state,
        status: action.status,
      }
    case "MULTIFORM/CLEAR-FORM":
      return {
        ...state,
        formData: {} as FormDataType,
      }
    default:
      return state
  }
}
export const setActiveStep = (activeStep: number) => ({ type: "MULTIFORM/SET-ACTIVE-STEP", activeStep }) as const
export const setName = (name: string) => ({ type: "MULTIFORM/SET-NAME", name }) as const
export const setSername = (sername: string) => ({ type: "MULTIFORM/SET-SERNAME", sername }) as const
export const setSex = (sex: "woman" | "man") => ({ type: "MULTIFORM/SET-SEX", sex }) as const
export const setNickname = (nickname: string) => ({ type: "MULTIFORM/SET-NICKNAME", nickname }) as const
export const setEmail = (email: string) => ({ type: "MULTIFORM/SET-EMAIL", email }) as const
export const setPhone = (phone: string) => ({ type: "MULTIFORM/SET-PHONE", phone }) as const
export const setRadio = (radio: number) => ({ type: "MULTIFORM/SET-RADIO", radio }) as const
export const setCheckbox = (checkbox: number[]) => ({ type: "MULTIFORM/SET-CHECKBOX", checkbox }) as const
export const setAdvantages = (advantages: string[]) => ({ type: "MULTIFORM/SET-ADVANTAGES", advantages }) as const
export const setAbout = (about: string) => ({ type: "MULTIFORM/SET-ABOUT", about }) as const
export const setRequestStatus = (status: RequestStatusType) =>
  ({ type: "MULTIFORM/SET-REQUEST-STATUS", status }) as const
export const clearForm = () => ({ type: "MULTIFORM/CLEAR-FORM" }) as const
