import * as React from "react"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import s from "./FormField.module.scss"
import { Path, UseFormRegister } from "react-hook-form"
import { SuperInput } from "../UI/SuperInput/SuperInput.tsx"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type FormFieldPropsType = DefaultInputPropsType & {
  label: string
  name: Path<any>
  register: UseFormRegister<any>
  error: any
}

export const FormField: React.FC<FormFieldPropsType> = ({ label, name, register, error, ...restProps }) => {
  return (
    <div className={s.container}>
      <label htmlFor="#">{label}</label>
      <SuperInput {...restProps} register={register} name={name} error={error} />
      {error && <div className={s.error}>{error.message}</div>}
    </div>
  )
}
