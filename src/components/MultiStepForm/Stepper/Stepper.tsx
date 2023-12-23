import s from "./Stepper.module.scss"
import React from "react"
import dotIcon from "../../../assets/icons/DotSmall.svg"
import checkIcon from "../../../assets/icons/CheckSmall.svg"

type StepperPropsType = {
  steps: Array<any>
  activeStep: number
  changeActiveStep: (step: number) => void
}

export const Stepper: React.FC<StepperPropsType> = ({ activeStep, steps }) => {
  const isStepComplete = (currentStep: number) => activeStep > currentStep
  const stepsListRender = steps.map((step, index) => {
    const activeStepStyle = step.value === activeStep && s.active
    const isStepDone = isStepComplete(step.value) && s.active
    const isShowLine = index !== steps.length - 1

    return (
      <div className={s.step} key={step.value}>
        <div className={`${s.circle} ${isStepDone} ${activeStepStyle}`}>
          {isStepComplete(step.value) && <img src={checkIcon} alt="check" />}
          {step.value === activeStep && <img src={dotIcon} alt="dot" />}
        </div>
        <span className={`${s.label} ${isStepComplete(step.value) && s.active}`}>{step.label}</span>
        {isShowLine && <div className={`${s.line} ${isStepDone}`}></div>}
      </div>
    )
  })

  return <div className={s.container}>{stepsListRender}</div>
}
