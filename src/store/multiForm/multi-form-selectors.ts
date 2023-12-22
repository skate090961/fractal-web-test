import { AppRootStateType } from "../store.ts"

export const selectActiveStep = (state: AppRootStateType) => state.multiForm.activeStep
