import s from "./FirstStep.module.scss"
import { FormField } from "../../FormField/FormField.tsx"
import { SuperSelect } from "../../UI/SuperSelect/SuperSelect.tsx"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React from "react"
import { setName, setNickname, setSername, setSex } from "../../../store/multiForm/multi-form-reducer.ts"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch, useSelector } from "react-redux"
import { selectMultiForm } from "../../../store/multiForm/multi-form-selectors.ts"

type FirstStepPropsType = {
  changeActiveStep: (stepValue: number) => void
}

enum SexEnumType {
  man = "мужской",
  woman = "женский",
  other = "Не выбрано",
}

export type FirstStepFormInput = {
  nickname: string
  name: string
  sername: string
  sex: SexEnumType
}

export const FirstStep: React.FC<FirstStepPropsType> = ({ changeActiveStep }) => {
  const multiFormData = useSelector(selectMultiForm)
  const dispatch = useDispatch()
  const schema = yup
    .object({
      nickname: yup
        .string()
        .required("Введите никнейм")
        .max(30, "Максимальная длина - 30 символов")
        .matches(/^[\u0410-\u044Fa-zA-Z0-9]+$/, "Никнейм не может содержать спецсимволы"),
      name: yup
        .string()
        .required("Введите имя")
        .max(50, "Максимальная длина - 50 символов")
        .matches(/^[a-zA-Zа-яА-Я]+$/, "Имя может содержать только буквы"),
      sername: yup
        .string()
        .required("Введите фамилию")
        .max(50, "Максимальная длина - 50 символов")
        .matches(/^[a-zA-Zа-яА-Я]+$/, "Фамилия может содержать только буквы"),
      sex: yup.string().test("sex-selector", "Выберите пол", (value, { path, createError }) => {
        if (!value || value === "other") {
          return createError({ path, message: "Выберите пол" })
        }
        return true
      }),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: multiFormData.nickname,
      name: multiFormData.name,
      sername: multiFormData.sername,
      sex: multiFormData.sex || SexEnumType.other,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FirstStepFormInput> = (data) => {
    const { sex, sername, name, nickname } = data
    dispatch(setName(name))
    dispatch(setSername(sername))
    dispatch(setNickname(nickname))
    dispatch(setSex(sex))
    changeActiveStep(2)
  }

  const sex = [
    { id: 1, value: SexEnumType.other, test: "other" },
    { id: 2, value: SexEnumType.man, test: "man" },
    { id: 3, value: SexEnumType.woman, test: "woman" },
  ]
  const handleGoBack = () => {
    window.history.back()
  }
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.fields}>
        <FormField
          name="nickname"
          register={register}
          error={errors.nickname}
          label="Никнейм"
          placeholder="Введите никнейм"
        />
        <FormField name="name" register={register} error={errors.name} label="Имя" placeholder="Введите имя" />
        <FormField
          name="sername"
          register={register}
          error={errors.sername}
          label="Фамилия"
          placeholder="Введите фамилию"
        />
        <SuperSelect options={sex} register={register} name="sex" error={errors.sex} />
      </div>
      <ButtonsControls prevStep={handleGoBack} />
    </form>
  )
}
