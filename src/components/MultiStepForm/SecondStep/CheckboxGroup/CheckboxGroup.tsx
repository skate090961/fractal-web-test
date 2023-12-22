import s from "./CheckboxGroup.module.scss"
import { SuperCheckbox } from "../../../UI/SuperCheckbox/SuperCheckbox.tsx"

export const CheckboxGroup = () => {
  return (
    <div className={s.group}>
      <span>Checkbox группа</span>
      <SuperCheckbox>1</SuperCheckbox>
      <SuperCheckbox>2</SuperCheckbox>
      <SuperCheckbox>3</SuperCheckbox>
    </div>
  )
}
