import s from "./RadioGroup.module.scss"
import { SuperRadio } from "../../../UI/SuperRadio/SuperRadio.tsx"
import { useState } from "react"
export const RadioGroup = () => {
  const [value, onChangeOption] = useState<number>(1)

  const options = [
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
  ]

  return (
    <div className={s.group}>
      <span>Radio группа</span>
      <SuperRadio options={options} onChangeOption={onChangeOption} value={value} />
    </div>
  )
}
