import * as React from "react"
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react"
import s from "./SuperCheckbox.module.scss"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, "type"> & {
  onChangeChecked?: (checked: boolean) => void
  spanClassName?: string
}
export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)

    onChangeChecked && onChangeChecked(e.currentTarget.checked)
  }

  return (
    <label className={s.label}>
      <input type={"checkbox"} onChange={onChangeCallback} className={s.checkbox} {...restProps} />
      <span className={s.fakeCheckbox}></span>
      {children && <span className={s.spanClassName}>{children}</span>}
    </label>
  )
}
