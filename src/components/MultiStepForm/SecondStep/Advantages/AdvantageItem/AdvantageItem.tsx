import s from "./AdvantageItem.module.scss"
import { SuperInput } from "../../../../UI/SuperInput/SuperInput.tsx"
import deleteIcon from "../../../../../assets/icons/Trash.svg"

export const AdvantageItem = () => {
  return (
    <div className={s.container}>
      {/*<SuperInput placeholder={"Введите преимущество"} />*/}
      <div className={s.icon}>
        <img src={deleteIcon} alt="trash" />
      </div>
    </div>
  )
}
