import s from "./ProfileCard.module.scss"
import { ProfileLink } from "./ProfileLink/ProfileLink.tsx"
import folderIcon from "../../assets/icons/Folder.svg"

export const ProfileCard = () => {
  const links = [
    { icon: folderIcon, text: "Telegram", link: "#" },
    { icon: folderIcon, text: "GitHub", link: "#" },
    { icon: folderIcon, text: "Резюме", link: "#" },
  ]

  const renderedLinks = links.map((link) => <ProfileLink {...link} key={link.text} />)

  return (
    <div className={s.container}>
      <div className={s.photo}>
        <span>АИ</span>
      </div>
      <div className={s.info}>
        <span className={s.name}>Алексей Иванов</span>
        <ul className={s.links}>{renderedLinks}</ul>
      </div>
    </div>
  )
}
