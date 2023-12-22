import s from "./SecondStep.module.scss"
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup.tsx"
import { RadioGroup } from "./RadioGroup/RadioGroup.tsx"
import { Advantages } from "./Advantages/Advantages.tsx"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React from "react"

type SecondStepPropsType = {
  changeActiveStep: (activeStep: number) => void
}

export const SecondStep: React.FC<SecondStepPropsType> = ({ changeActiveStep }) => {
  const handleNextStep = () => changeActiveStep(3)
  const handlePrevStep = () => changeActiveStep(1)
  return (
    <div className={s.form}>
      <div className={s.fields}>
        <Advantages />
        <CheckboxGroup />
        <RadioGroup />
      </div>
      <ButtonsControls prevStep={handlePrevStep} nextStep={handleNextStep} />
    </div>
  )
}
