import s from "./SecondStep.module.scss"
import { RadioCheckboxGroup } from "./RadioCheckboxGroup/RadioCheckboxGroup.tsx"
import { ButtonsControls } from "../ButtonsControls/ButtonsControls.tsx"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import plusIcon from "../../../../assets/icons/Plus.svg"
import { yupResolver } from "@hookform/resolvers/yup"
import { selectAdvantageFields, selectMultiForm } from "../../../../store/multiForm/multi-form-selectors.ts"
import { convertNumbersToStrings } from "../../../../helpers/convertNumbersToStrings.ts"
import { convertStringsToNumbers } from "../../../../helpers/convertStringsToNumbers.ts"
import { setAdvantageFields, updateFormData } from "../../../../store/multiForm/multi-form-reducer.ts"
import { SuperButton } from "../../../UI/SuperButton/SuperButton.tsx"
import { secondStepSchema } from "./secondStepSchema.ts"
import { Advantage } from "./Advantage/Advantage.tsx"

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
  const advantageFields = useSelector(selectAdvantageFields)
  const dispatch = useDispatch()

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
    resolver: yupResolver(secondStepSchema),
  })

  const { fields, append, remove, update } = useFieldArray({
    name: "advantages",
    control,
  })
  const advantagesRenderList = fields.map((field, index) => (
    <Advantage register={register} remove={remove} errors={errors} index={index} key={index} field={field} />
  ))

  useEffect(() => {
    advantageFields.forEach((field, index) => {
      update(index, { name: field.name })
    })
  }, [])
  const onSubmit: SubmitHandler<SecondStepFormInput> = (data) => {
    const { advantages, checkbox, radio } = data
    const advantagesTotal = advantages.map((advantage) => advantage.name)
    dispatch(setAdvantageFields(advantages))
    dispatch(
      updateFormData({
        checkbox: convertStringsToNumbers(checkbox),
        radio: Number(radio),
        advantages: advantagesTotal,
      }),
    )
    changeActiveStep(3)
  }
  const handlePrevStep = () => changeActiveStep(1)
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit as any)}>
      <div className={s.fields}>
        <div className={s.block}>
          <div>Преимущества</div>
          {advantagesRenderList}
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
