import s from "./StartForm.module.scss"
import { ProfileCard } from "../ProfileCard/ProfileCard.tsx"
import { FormField } from "../FormField/FormField.tsx"
import { SuperButton } from "../UI/SuperButton/SuperButton.tsx"
import { Navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectMultiForm } from "../../store/multiForm/multi-form-selectors.ts"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"

export type FirstStepFormInput = {
  phone: string
  email: string
}

export const StartForm = () => {
  const navigate = useNavigate()
  const multiFormData = useSelector(selectMultiForm)
  const dispatch = useDispatch()
  const schema = yup
    .object({
      phone: yup.string(),
      email: yup.string().email("Введите корректный email").required("Введите email"),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: multiFormData.phone,
      email: multiFormData.email,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FirstStepFormInput> = (data) => {
    const { phone, email } = data
    console.log(data)
    navigate("/steps")
  }

  return (
    <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.wrapper}>
        <div className={s.profileCard}>
          <ProfileCard />
        </div>
        <FormField
          name="phone"
          register={register}
          error={errors.phone}
          label="Номер телефона"
          placeholder="+7 (999) 999-99-99"
          onChange={(event) => {
            event.target.value = "1123123"
          }}
        />
        <FormField
          name="email"
          register={register}
          error={errors.email}
          label="Email"
          placeholder="webstudio.fractal@example.com"
        />
      </div>
      <div className={s.buttonWrapper}>
        <SuperButton variant={"contained"} type={"submit"}>
          Начать
        </SuperButton>
      </div>
    </form>
  )
}
