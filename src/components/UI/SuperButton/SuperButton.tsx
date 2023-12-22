import * as React from "react"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import s from "./SuperButton.module.scss"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type VariantType = "contained" | "outlined"

type SuperButtonPropsType = DefaultButtonPropsType & {
  variant: VariantType
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({ variant, ...restProps }) => {
  const finalClassName = `${s.button} ${s[variant]}`
  return <button {...restProps} className={finalClassName} />
}
