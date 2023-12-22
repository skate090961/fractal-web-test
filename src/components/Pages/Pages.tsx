import { Route, Routes } from "react-router-dom"
import { StartForm } from "../StartForm/StartForm.tsx"
import { MultiStepForm } from "../MultiStepForm/MultiStepForm.tsx"

export const Pages = () => {
  return (
    <Routes>
      <Route path={"/"} element={<StartForm />} />
      <Route path={"steps"} element={<MultiStepForm />} />
    </Routes>
  )
}
