import s from "./Advantages.module.scss"
import { useEffect, useState } from "react"
import plusIcon from "../../../../assets/icons/Plus.svg"
import { SuperButton } from "../../../UI/SuperButton/SuperButton.tsx"
import { AdvantageItem } from "./AdvantageItem/AdvantageItem.tsx"

export const Advantages = () => {
  const [inputList, setInputList] = useState([{ id: "1" }, { id: "2" }, { id: "3" }])
  useEffect(() => {}, [inputList])
  const advantagesListRender = inputList.map((advantage) => <AdvantageItem key={advantage.id} />)
  const addInput = () => setInputList([...inputList, { id: "45" }])
  return (
    <div className={s.container}>
      <div>Преимущества</div>
      <div className={s.container}>{advantagesListRender}</div>
      <div>
        <SuperButton onClick={addInput} variant={"outlined"}>
          <img src={plusIcon} alt="plus-icon" className={s.buttonIcon} />
        </SuperButton>
      </div>
    </div>
  )
}
