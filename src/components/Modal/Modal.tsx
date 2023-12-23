import s from "./Modal.module.scss"
import succeededIcon from "../../assets/icons/CircleCheckFilled.png"
import failedIcon from "../../assets/icons/CircleCancelFilled.png"
import { SuperButton } from "../UI/SuperButton/SuperButton.tsx"
import { Link } from "react-router-dom"
import { setActiveStep } from "../../store/multiForm/multi-form-reducer.ts"
import { useDispatch } from "react-redux"
import React from "react"
import closeIcon from "../../assets/icons/Close.png"

type ModalPropsType = {
  isSucceeded: boolean
}

export const Modal: React.FC<ModalPropsType> = ({ isSucceeded }) => {
  const dispatch = useDispatch()
  const handleGoMain = () => dispatch(setActiveStep(1))

  return (
    <>
      <div className={s.background}></div>
      <div className={s.modal}>
        <div className={`${s.header} ${isSucceeded ? s.succeeded : s.failed}`}>
          <span className={s.title}>{isSucceeded ? "Форма успешно отправлена" : "Ошибка"}</span>
          {!isSucceeded && (
            <button className={s.close}>
              <img src={closeIcon} alt="close" />
            </button>
          )}
        </div>
        <div className={s.imageWrapper}>
          <div className={`${s.iconBackground} ${isSucceeded ? s.succeeded : s.failed}`}>
            <img src={isSucceeded ? succeededIcon : failedIcon} alt="succeeded-icon" />
          </div>
        </div>
        <div className={`${s.buttonWrapper} ${isSucceeded ? s.succeeded : s.failed}`}>
          {isSucceeded ? (
            <Link to={"/"}>
              <SuperButton variant={"contained"} onClick={handleGoMain}>
                На главную
              </SuperButton>
            </Link>
          ) : (
            <SuperButton variant={"contained"}>Закрыть</SuperButton>
          )}
        </div>
      </div>
    </>
  )
}
