import * as React from "react"
import s from "./FormField.module.scss"
import { SuperInput } from "../UI/SuperInput/SuperInput.tsx"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type FormFieldPropsType = DefaultInputPropsType & {
  label: string
}

export const FormField: React.FC<FormFieldPropsType> = ({ label, ...restProps }) => {
  return (
    <div className={s.container}>
      <label htmlFor="#">{label}</label>
      <SuperInput {...restProps} />
    </div>
  )
}
