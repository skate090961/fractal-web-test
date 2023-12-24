import { Dispatch } from "redux"
import { formAPI } from "../../api/form-api.ts"
import { clearForm, FormDataModelType, setAdvantageFields, setRequestStatus } from "./multi-form-reducer.ts"

export const postForm = (formData: FormDataModelType) => async (dispatch: Dispatch) => {
  dispatch(setRequestStatus("loading"))
  try {
    await formAPI.postForm(formData)
    dispatch(setRequestStatus("succeeded"))
    dispatch(clearForm())
    dispatch(setAdvantageFields([]))
  } catch (e) {
    dispatch(setRequestStatus("failed"))
  }
}
