import s from "./ButtonsControls.module.scss"
import { SuperButton } from "../../UI/SuperButton/SuperButton.tsx"
import React from "react"

type ButtonsControls = {
  isLastStep?: boolean
  prevStep?: () => void
  nextStep?: () => void
}

export const ButtonsControls: React.FC<ButtonsControls> = ({ isLastStep, prevStep, nextStep }) => {
  const lastStepTitle = isLastStep ? "Отправить" : "Далее"

  return (
    <div className={s.controls}>
      <SuperButton variant={"outlined"} onClick={prevStep}>
        Назад
      </SuperButton>
      <SuperButton variant={"contained"} onClick={nextStep}>
        {lastStepTitle}
      </SuperButton>
    </div>
  )
}
