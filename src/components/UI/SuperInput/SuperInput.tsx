import s from "./SuperInput.module.scss"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import * as React from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputPropsType = DefaultInputPropsType & {}
export const SuperInput: React.FC<SuperInputPropsType> = ({ ...restProps }) => {
  return (
    <div className={s.wrapper}>
      <input type="text" className={s.input} {...restProps} />
    </div>
  )
}
