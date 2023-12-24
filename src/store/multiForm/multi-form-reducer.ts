export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

const initState: MultiFormStateType = {
  formData: {} as FormDataModelType,
  activeStep: 1,
  status: "idle",
}

export enum SexEnum {
  MAN = "man",
  WOMAN = "woman",
}

export type FormDataModelType = {
  nickname?: string
  name?: string
  sername?: string
  phone?: string
  email?: string
  sex?: SexEnum
  advantages?: string[]
  radio?: number
  checkbox?: number[]
  about?: string
}

type MultiFormStateType = {
  activeStep: number
  formData: FormDataModelType
  status: RequestStatusType
}
export type ActionsType =
  | ReturnType<typeof setActiveStep>
  | ReturnType<typeof setAdvantages>
  | ReturnType<typeof setRequestStatus>
  | ReturnType<typeof clearForm>
  | ReturnType<typeof updateFormData>
export const multiFormReducer = (state: MultiFormStateType = initState, action: ActionsType): MultiFormStateType => {
  switch (action.type) {
    case "MULTIFORM/SET-ACTIVE-STEP":
      return { ...state, activeStep: action.activeStep }
    case "MULTIFORM/SET-ADVANTAGES":
      return {
        ...state,
        formData: { ...state.formData, advantages: [...action.advantages] },
      }
    case "MULTIFORM/SET-REQUEST-STATUS":
      return {
        ...state,
        status: action.status,
      }
    case "MULTIFORM/CLEAR-FORM":
      return {
        ...state,
        formData: {} as FormDataModelType,
      }
    case "MULTIFORM/UPDATE-FORM-DATA":
      return {
        ...state,
        formData: { ...state.formData, ...action.model },
      }
    default:
      return state
  }
}
export const setActiveStep = (activeStep: number) => ({ type: "MULTIFORM/SET-ACTIVE-STEP", activeStep }) as const
export const setAdvantages = (advantages: string[]) => ({ type: "MULTIFORM/SET-ADVANTAGES", advantages }) as const
export const setRequestStatus = (status: RequestStatusType) =>
  ({ type: "MULTIFORM/SET-REQUEST-STATUS", status }) as const
export const clearForm = () => ({ type: "MULTIFORM/CLEAR-FORM" }) as const
export const updateFormData = (model: FormDataModelType) => ({ type: "MULTIFORM/UPDATE-FORM-DATA", model }) as const
