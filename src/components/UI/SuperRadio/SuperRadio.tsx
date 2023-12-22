import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react"
import s from "./SuperRadio.module.scss"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, "type"> & {
  options?: any[]
  onChangeOption?: (option: any) => void

  spanProps?: DefaultSpanPropsType
}

export const SuperRadio: React.FC<SuperRadioPropsType> = ({
  name,
  className,
  options,
  value,
  onChange,
  onChangeOption,
  spanProps,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  const mappedOptions: any[] = options
    ? options.map((o) => (
        <label key={name + "-" + o.id} className={s.label}>
          <input
            className={s.radio}
            type={"radio"}
            name={"radio-group"}
            value={o.id}
            checked={value == o.id}
            onChange={onChangeCallback}
            {...restProps}
          />
          <span className={s.fakeRadio}></span>
          <span {...spanProps} className={s.span}>
            {o.value}
          </span>
        </label>
      ))
    : []

  return <div className={s.options}>{mappedOptions}</div>
}
