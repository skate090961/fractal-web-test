import { FormDataModelType } from "../store/multiForm/multi-form-reducer.ts"

const serverRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("response")
      } else {
        reject(new Error("Server Error"))
      }
    }, 2000)
  })
}

export const formAPI = {
  async postForm(formData: FormDataModelType) {
    console.log(formData)
    return await serverRequest()
  },
}
