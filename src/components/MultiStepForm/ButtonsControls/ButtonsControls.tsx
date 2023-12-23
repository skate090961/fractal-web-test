import s from "./ButtonsControls.module.scss"
import { SuperButton } from "../../UI/SuperButton/SuperButton.tsx"
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonsControls = DefaultButtonPropsType & {
  isLastStep?: boolean
  prevStep?: () => void
  nextStep?: () => void
}

export const ButtonsControls: React.FC<ButtonsControls> = ({ isLastStep, prevStep, nextStep, ...restProps }) => {
  const lastStepTitle = isLastStep ? "Отправить" : "Далее"

  return (
    <div className={s.controls}>
      <SuperButton variant={"outlined"} onClick={prevStep}>
        Назад
      </SuperButton>
      <SuperButton variant={"contained"} onClick={nextStep} type={"submit"}>
        {lastStepTitle}
      </SuperButton>
    </div>
  )
}
