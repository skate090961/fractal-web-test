import s from "../SecondStep.module.scss"
import { SuperInput } from "../../../../UI/SuperInput/SuperInput.tsx"
import deleteIcon from "../../../../../assets/icons/Trash.svg"
import React from "react"

type AdvantagePropsType = {
  field: any
  index: any
  register: any
  errors: any
  remove: any
}

export const Advantage: React.FC<AdvantagePropsType> = ({ field, index, register, errors, remove }) => {
  return (
    <section key={field.id} className={s.advantage}>
      <SuperInput
        name={`advantages.${index}.name`}
        register={register}
        error={errors?.advantages?.[index]?.name || ""}
        style={{ width: "300px", backgroundColor: "white" }}
      />
      <div onClick={() => remove(index)} className={s.icon}>
        <img src={deleteIcon} alt="trash" />
      </div>
    </section>
  )
}
