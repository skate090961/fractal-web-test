import * as React from "react"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import s from "./FormField.module.scss"
import { Path, UseFormRegister } from "react-hook-form"
import { SuperInput } from "../UI/SuperInput/SuperInput.tsx"
import InputMask from "react-input-mask"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type FormFieldPropsType = DefaultInputPropsType & {
  label: string
  name: Path<any>
  register: UseFormRegister<any>
  error: any
  isPhone?: boolean
  onChange?: any
  value?: any
}

export const FormField: React.FC<FormFieldPropsType> = ({
  label,
  name,
  register,
  error,
  isPhone,
  onChange,
  value,
  ...restProps
}) => {
  const finallyInputStyle = error ? `${s.input} ${s.error}` : s.input
  return (
    <div className={s.container}>
      <label htmlFor={`label-${label}`}>{label}</label>
      {isPhone ? (
        <InputMask
          mask="+7 (999) 999-99-99"
          maskChar={null}
          className={finallyInputStyle}
          {...register(name)}
          onChange={onChange}
          value={value}
          id={`label-${label}`}
        />
      ) : (
        <SuperInput {...restProps} register={register} name={name} error={error} id={`label-${label}`} />
      )}
    </div>
  )
}
