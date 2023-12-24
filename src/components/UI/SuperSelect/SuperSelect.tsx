import * as React from "react"
import { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes } from "react"
import s from "./SuperSelect.module.scss"
import topIcon from "../../../assets/icons/ChevronTop.svg"
import { Path, UseFormRegister } from "react-hook-form"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: number) => void
  name: Path<any>
  register: UseFormRegister<any>
  error: any
  title?: string
}
export const SuperSelect: React.FC<SelectPropsType> = ({
  options,
  onChangeOption,
  name,
  register,
  error,
  title,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o) => (
        <option className={s.option} key={o.value} value={o.value}>
          {o.name}
        </option>
      ))
    : []
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(Number(e.currentTarget.value))
  }

  return (
    <div className={s.wrapper}>
      <div>{title}</div>
      <select {...restProps} className={s.select} {...register(name)} onChange={onChangeCallback}>
        {mappedOptions}
      </select>
      {error && <div className={s.error}>{error.message}</div>}
      <img src={topIcon} alt="" className={s.icon} />
    </div>
  )
}
