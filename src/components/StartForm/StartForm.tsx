import s from "./StartForm.module.scss"
import { ProfileCard } from "../ProfileCard/ProfileCard.tsx"
import { FormField } from "../FormField/FormField.tsx"
import { SuperButton } from "../UI/SuperButton/SuperButton.tsx"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectMultiForm } from "../../store/multiForm/multi-form-selectors.ts"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { setName, setNickname, setSername, setSex } from "../../store/multiForm/multi-form-reducer.ts"
import React from "react"

export type FirstStepFormInput = {
  phone: string
  email: string
}

export const StartForm = () => {
  const multiFormData = useSelector(selectMultiForm)
  const dispatch = useDispatch()
  const schema = yup
    .object({
      phone: yup.string(),
      email: yup.string(),
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
  }

  return (
    <div className={s.container}>
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
        />
        {/*<FormField label="Номер телефона" placeholder="+7 999 999-99-99" />*/}
        {/*<FormField label="Email" placeholder="webstudio.fractal@example.com" />*/}
      </div>
      <form className={s.buttonWrapper}>
        <Link to={"/steps"}>
          <SuperButton variant={"contained"} type={"submit"}>
            Начать
          </SuperButton>
        </Link>
      </form>
    </div>
  )
}
