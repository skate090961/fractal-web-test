import s from "./RadioCheckboxGroup.module.scss"
import { Path, UseFormRegister } from "react-hook-form"
import React from "react"

type CheckboxGroupType = {
  title?: string
  type: string
  name: Path<any>
  register: UseFormRegister<any>
  options: { name: any; value: any }[]
}

export const RadioCheckboxGroup: React.FC<CheckboxGroupType> = ({ name, register, options, type, title }) => {
  return (
    <div className={s.group}>
      <span>{title}</span>
      {options.map((option) => (
        <label className={s.label} key={option.value}>
          <input
            type={type}
            {...register(name)}
            value={option.value}
            className={`${s.box} ${type === "radio" ? s.radioInner : s.checkboxInner}`}
          />
          <span className={`${s.fake} ${type === "radio" ? s.radioBox : s.checkboxBox}`}></span>
          <span className={s.name}>{option.name}</span>
        </label>
      ))}
    </div>
  )
}
