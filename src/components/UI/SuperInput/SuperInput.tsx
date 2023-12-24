import s from "./SuperInput.module.scss"
import * as React from "react"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { Path, UseFormRegister } from "react-hook-form"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputPropsType = Omit<DefaultInputPropsType, "name"> & {
  name: Path<any>
  register: UseFormRegister<any>
  error: any
}
export const SuperInput: React.FC<SuperInputPropsType> = ({ name, register, error, ...restProps }) => {
  const finallyInputStyle = error ? `${s.input} ${restProps.className} ${s.error}` : `${s.input} ${restProps.className}`

  return (
    <div className={s.wrapper}>
      <input className={finallyInputStyle} {...restProps} {...register(name)} />
      {error ? <div className={s.errorText}>{error.message}</div> : <br />}
    </div>
  )
}
