import s from "./ProfileLink.module.scss"
import * as React from "react"

type LinkPropsType = {
  icon: string
  text: string
  link: string
}

export const ProfileLink: React.FC<LinkPropsType> = ({ link, text, icon }) => {
  return (
    <li className={s.container}>
      <img src={icon} alt="icon" className={s.icon} />
      <a href={link} className={s.link}>
        {text}
      </a>
    </li>
  )
}
