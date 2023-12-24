import s from "./ThirdStep.module.scss"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React, { ChangeEvent, useState } from "react"
import { useSelector } from "react-redux"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { selectMultiForm, selectRequestStatus } from "../../../../store/multiForm/multi-form-selectors.ts"
import { useAppDispatch } from "../../../../store/store.ts"
import { setAbout } from "../../../../store/multiForm/multi-form-reducer.ts"
import { postForm } from "../../../../store/multiForm/multi-form-thunk.ts"
import { Modal } from "../../../Modal/Modal.tsx"
type ThirdStepPropsType = {
  changeActiveStep: (activeStep: number) => void
}
type ThirdStepFormInput = {
  about: string
}
export const ThirdStep: React.FC<ThirdStepPropsType> = ({ changeActiveStep }) => {
  const multiFormData = useSelector(selectMultiForm)
  const requestStatus = useSelector(selectRequestStatus)
  const dispatch = useAppDispatch()
  const schema = yup
    .object({
      about: yup.string().max(200, "Максимальная длина - 200 символов"),
    })
    .required()
  const handlePrevStep = () => changeActiveStep(2)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      about: multiFormData.about,
    },
    mode: "all",
    resolver: yupResolver(schema),
  })

  const [characterCount, setCharacterCount] = useState(0)

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    const valueWithoutSpaces = value.replace(/\s/g, "")
    setCharacterCount(valueWithoutSpaces.length)
  }
  const onSubmit: SubmitHandler<ThirdStepFormInput> = async (data) => {
    const { about } = data
    dispatch(setAbout(about.replace(/\s+/g, " ")))
    await dispatch(postForm(multiFormData))
  }
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit as any)}>
      <div className={s.fields}>
        <span>О себе</span>
        <textarea
          className={s.textarea}
          placeholder={"Введите о себе"}
          {...register("about")}
          onChange={handleInputChange}
        ></textarea>
        <div className={s.infoWrapper}>
          {errors && <div className={s.errorText}>{errors.about?.message}</div>}
          <div className={s.counter}>{characterCount}/200</div>
        </div>
      </div>
      <ButtonsControls isLastStep={true} prevStep={handlePrevStep} isDisabled={requestStatus === "loading"} />
      {requestStatus === "succeeded" && <Modal isSucceeded={true} />}
      {requestStatus === "failed" && <Modal isSucceeded={false} />}
    </form>
  )
}
