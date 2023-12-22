import s from "./ThirdStep.module.scss"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React from "react"

type ThirdStepPropsType = {
  changeActiveStep: (activeStep: number) => void
}

export const ThirdStep: React.FC<ThirdStepPropsType> = ({ changeActiveStep }) => {
  const handleNextStep = () => changeActiveStep(4)
  const handlePrevStep = () => changeActiveStep(2)

  return (
    <div className={s.form}>
      <div className={s.fields}>
        <span>О себе</span>
        <textarea className={s.textarea} placeholder={"Введите о себе"}></textarea>
      </div>
      <ButtonsControls isLastStep={true} nextStep={handleNextStep} prevStep={handlePrevStep} />
    </div>
  )
}
