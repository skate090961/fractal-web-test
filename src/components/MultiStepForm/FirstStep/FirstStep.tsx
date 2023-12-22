import s from "./FirstStep.module.scss"
import { FormField } from "../../FormField/FormField.tsx"
import { SuperSelect } from "../../UI/SuperSelect/SuperSelect.tsx"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React from "react"

type FirstStepPropsType = {
  changeActiveStep: (stepValue: number) => void
}

export const FirstStep: React.FC<FirstStepPropsType> = ({ changeActiveStep }) => {
  const sex = [
    { id: 1, value: "мужской" },
    { id: 2, value: "женский" },
  ]
  const handleGoBack = () => {
    window.history.back()
  }
  const handleChangeActiveStep = () => changeActiveStep(2)

  return (
    <div className={s.form}>
      <div className={s.fields}>
        <FormField label="Никнейм" placeholder="Введите никнейм" />
        <FormField label="Имя" placeholder="Введите имя" />
        <FormField label="Фамилия" placeholder="Введите фамилию" />
        <SuperSelect options={sex} />
      </div>
      <ButtonsControls prevStep={handleGoBack} nextStep={handleChangeActiveStep} />
    </div>
  )
}
