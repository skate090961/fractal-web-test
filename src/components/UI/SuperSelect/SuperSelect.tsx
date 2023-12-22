import * as React from "react"
import { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes } from "react"
import s from "./SuperSelect.module.scss"
import downIcon from "../../../assets/icons/ChevronDown.svg"
import topIcon from "../../../assets/icons/ChevronTop.svg"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
type SelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: number) => void
}
export const SuperSelect: React.FC<SelectPropsType> = ({ options, onChangeOption, ...restProps }) => {
  const mappedOptions: any[] = options
    ? options.map((o) => (
        <option className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : []
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(Number(e.currentTarget.value))
  }

  return (
    <div className={s.wrapper}>
      <select {...restProps} className={s.select} onChange={onChangeCallback}>
        <option disabled selected value="" className={s.hidden}>
          Не выбрано
        </option>
        {mappedOptions}
      </select>
      <img src={topIcon} alt="" className={s.icon} />
    </div>
  )
}
