import s from "./ButtonsControls.module.scss"
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { SuperButton } from "../../../UI/SuperButton/SuperButton.tsx"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonsControls = DefaultButtonPropsType & {
  isLastStep?: boolean
  prevStep?: () => void
  nextStep?: () => void
  isDisabled?: boolean
}

export const ButtonsControls: React.FC<ButtonsControls> = ({ isLastStep, prevStep, nextStep, isDisabled }) => {
  const lastStepTitle = isLastStep ? "Отправить" : "Далее"

  return (
    <div className={s.controls}>
      <SuperButton variant={"outlined"} onClick={prevStep}>
        Назад
      </SuperButton>
      <SuperButton variant={"contained"} onClick={nextStep} type={"submit"} disabled={isDisabled}>
        {lastStepTitle}
      </SuperButton>
    </div>
  )
}
