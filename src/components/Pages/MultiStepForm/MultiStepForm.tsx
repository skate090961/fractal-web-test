import s from "./MultiStepForm.module.scss"
import { FirstStep } from "./FirstStep/FirstStep.tsx"
import { SecondStep } from "./SecondStep/SecondStep.tsx"
import { ThirdStep } from "./ThirdStep/ThirdStep.tsx"
import { Stepper } from "./Stepper/Stepper.tsx"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectActiveStep } from "../../../store/multiForm/multi-form-selectors.ts"
import { setActiveStep } from "../../../store/multiForm/multi-form-reducer.ts"

type StepType = {
  label: string
  value: number
  component: React.ReactNode
}

export const MultiStepForm = () => {
  const activeStep = useSelector(selectActiveStep)
  const dispatch = useDispatch()
  const changeActiveStep = (stepValue: number) => {
    if (stepValue <= steps.length || stepValue >= 1) {
      dispatch(setActiveStep(stepValue))
    }
  }

  const steps: StepType[] = [
    {
      label: "1",
      value: 1,
      component: <FirstStep changeActiveStep={changeActiveStep} />,
    },
    {
      label: "2",
      value: 2,
      component: <SecondStep changeActiveStep={changeActiveStep} />,
    },
    {
      label: "3",
      value: 3,
      component: <ThirdStep changeActiveStep={changeActiveStep} />,
    },
  ]
  const activeComponent = steps.find(({ value }) => value === activeStep)?.component || null

  return (
    <div className={s.form}>
      <Stepper steps={steps} activeStep={activeStep} changeActiveStep={changeActiveStep} />
      {activeComponent}
    </div>
  )
}
