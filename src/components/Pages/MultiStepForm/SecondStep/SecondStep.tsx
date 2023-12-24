import s from "./SecondStep.module.scss"
import { RadioCheckboxGroup } from "./RadioCheckboxGroup/RadioCheckboxGroup.tsx"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import plusIcon from "../../../../assets/icons/Plus.svg"
import deleteIcon from "../../../../assets/icons/Trash.svg"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { selectMultiForm } from "../../../../store/multiForm/multi-form-selectors.ts"
import { convertNumbersToStrings } from "../../../../helpers/convertNumbersToStrings.ts"
import { convertStringsToNumbers } from "../../../../helpers/convertStringsToNumbers.ts"
import { setAdvantages, setCheckbox, setRadio } from "../../../../store/multiForm/multi-form-reducer.ts"
import { SuperInput } from "../../../UI/SuperInput/SuperInput.tsx"
import { SuperButton } from "../../../UI/SuperButton/SuperButton.tsx"

type SecondStepPropsType = {
  changeActiveStep: (activeStep: number) => void
}

export type SecondStepFormInput = {
  advantages: {
    name: string
  }[]
  checkbox: string[]
  radio: string
}

export const SecondStep: React.FC<SecondStepPropsType> = ({ changeActiveStep }) => {
  const multiFormData = useSelector(selectMultiForm)
  const dispatch = useDispatch()

  const schema = yup.object().shape({
    advantages: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Поле обязательно для заполнения"),
      }),
    ),
  })
  const checkboxValue = multiFormData.checkbox ? convertNumbersToStrings(multiFormData.checkbox) : []
  const radioValue = multiFormData.radio ? String(multiFormData.radio) : "1"
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      advantages: [{ name: "" }],
      checkbox: checkboxValue,
      radio: radioValue,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const { fields, append, remove } = useFieldArray({
    name: "advantages",
    control,
  })

  const onSubmit: SubmitHandler<SecondStepFormInput> = (data) => {
    const { advantages, checkbox, radio } = data
    const advantagesTotal = advantages.map((advantage) => advantage.name)
    dispatch(setCheckbox(convertStringsToNumbers(checkbox)))
    dispatch(setRadio(Number(radio)))
    dispatch(setAdvantages(advantagesTotal))
    changeActiveStep(3)
  }
  const handlePrevStep = () => changeActiveStep(1)
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.fields}>
        <div className={s.block}>
          <div>Преимущества</div>
          {fields.map((field, index) => {
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
          })}
          <div>
            <SuperButton type="button" onClick={() => append({ name: "" })} variant={"outlined"}>
              <img src={plusIcon} alt="plus-icon" className={s.buttonIcon} />
            </SuperButton>
          </div>
        </div>
        <RadioCheckboxGroup
          title={"Checkbox группа"}
          register={register}
          name={"checkbox"}
          options={[
            { name: 1, value: 1 },
            { name: 2, value: 2 },
            { name: 3, value: 3 },
          ]}
          type={"checkbox"}
        />
        <RadioCheckboxGroup
          title={"Radio группа"}
          register={register}
          name={"radio"}
          options={[
            { name: 1, value: 1 },
            { name: 2, value: 2 },
            { name: 3, value: 3 },
          ]}
          type={"radio"}
        />
      </div>

      <ButtonsControls prevStep={handlePrevStep} />
    </form>
  )
}
