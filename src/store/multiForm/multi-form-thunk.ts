import { Dispatch } from "redux"
import { formAPI } from "../../api/form-api.ts"
import { clearForm, FormDataType, setRequestStatus } from "./multi-form-reducer.ts"

export const postForm = (formData: FormDataType) => async (dispatch: Dispatch) => {
  dispatch(setRequestStatus("loading"))
  try {
    await formAPI.postForm(formData)
    dispatch(setRequestStatus("succeeded"))
    dispatch(clearForm())
  } catch (e) {
    dispatch(setRequestStatus("failed"))
  }
}
