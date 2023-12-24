import s from "./FirstStep.module.scss"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch, useSelector } from "react-redux"
import { selectMultiForm } from "../../../../store/multiForm/multi-form-selectors.ts"
import { SexEnum, updateFormData } from "../../../../store/multiForm/multi-form-reducer.ts"
import { FormField } from "../../../FormField/FormField.tsx"
import { SuperSelect } from "../../../UI/SuperSelect/SuperSelect.tsx"
import { firstStepSchema } from "./FirstStepSchema.ts"

type FirstStepPropsType = {
  changeActiveStep: (stepValue: number) => void
}

export type FirstStepFormInput = {
  nickname: string
  name: string
  sername: string
  sex: SexEnum | undefined
}

export const FirstStep: React.FC<FirstStepPropsType> = ({ changeActiveStep }) => {
  const multiFormData = useSelector(selectMultiForm)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: multiFormData.nickname,
      name: multiFormData.name,
      sername: multiFormData.sername,
      sex: multiFormData.sex,
    },
    mode: "onBlur",
    resolver: yupResolver(firstStepSchema),
  })

  const onSubmit: SubmitHandler<FirstStepFormInput> = (data) => {
    const { sex, sername, name, nickname } = data
    dispatch(updateFormData({ sex, sername, name, nickname }))
    changeActiveStep(2)
  }

  const handleGoBack = () => {
    window.history.back()
  }
  const inputStyle = { width: "300px", backgroundColor: "white" }
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit as any)}>
      <div className={s.fields}>
        <FormField
          name="nickname"
          register={register}
          error={errors.nickname}
          label="Никнейм"
          placeholder="Введите никнейм"
          style={inputStyle}
        />
        <FormField
          name="name"
          register={register}
          error={errors.name}
          label="Имя"
          placeholder="Введите имя"
          style={inputStyle}
        />
        <FormField
          name="sername"
          register={register}
          error={errors.sername}
          label="Фамилия"
          placeholder="Введите фамилию"
          style={inputStyle}
        />
        <SuperSelect
          options={[
            { value: "other", name: "Не выбрано" },
            { value: "man", name: "Мужской" },
            { value: "woman", name: "Женский" },
          ]}
          register={register}
          name="sex"
          error={errors.sex}
          title="Пол"
        />
      </div>
      <ButtonsControls prevStep={handleGoBack} />
    </form>
  )
}
