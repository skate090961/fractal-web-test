import s from "./StartForm.module.scss"
import { ProfileCard } from "../../ProfileCard/ProfileCard.tsx"
import { FormField } from "../../FormField/FormField.tsx"
import { SuperButton } from "../../UI/SuperButton/SuperButton.tsx"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectMultiForm } from "../../../store/multiForm/multi-form-selectors.ts"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { updateFormData } from "../../../store/multiForm/multi-form-reducer.ts"
import { startFormSchema } from "./StartFormSchema.ts"

export type FirstStepFormInput = {
  phone: string
  email: string
}

export const StartForm = () => {
  const navigate = useNavigate()
  const multiFormData = useSelector(selectMultiForm)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: multiFormData.email,
    },
    mode: "onBlur",
    resolver: yupResolver(startFormSchema),
  })

  const onSubmit: SubmitHandler<FirstStepFormInput> = (data) => {
    const { phone, email } = data
    dispatch(updateFormData({ phone, email }))
    navigate("/steps")
  }

  return (
    <form className={s.container} onSubmit={handleSubmit(onSubmit as any)}>
      <div className={s.wrapper}>
        <div className={s.profileCard}>
          <ProfileCard />
        </div>
        <Controller
          name="phone"
          control={control}
          defaultValue={multiFormData.phone || ""}
          render={({ field: { onChange, value } }) => (
            <FormField
              name="phone"
              register={register}
              error={errors.phone}
              label="Номер телефона"
              placeholder="+7 (999) 999-99-99"
              onChange={onChange}
              value={value}
              isPhone={true}
            />
          )}
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
