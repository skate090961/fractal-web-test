import { AppRootStateType } from "../store.ts"

export const selectActiveStep = (state: AppRootStateType) => state.multiForm.activeStep
export const selectMultiForm = (state: AppRootStateType) => state.multiForm.formData
export const selectRequestStatus = (state: AppRootStateType) => state.multiForm.status
