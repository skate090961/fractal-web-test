import s from "./StartForm.module.scss"
import { ProfileCard } from "../ProfileCard/ProfileCard.tsx"
import { FormField } from "../FormField/FormField.tsx"
import { SuperButton } from "../UI/SuperButton/SuperButton.tsx"
import { Link } from "react-router-dom"

export const StartForm = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.profileCard}>
          <ProfileCard />
        </div>
        <FormField label="Номер телефона" placeholder="+7 999 999-99-99" />
        <FormField label="Email" placeholder="webstudio.fractal@example.com" />
      </div>
      <div className={s.buttonWrapper}>
        <Link to={"/steps"}>
          <SuperButton variant={"contained"}>Начать</SuperButton>
        </Link>
      </div>
    </div>
  )
}
