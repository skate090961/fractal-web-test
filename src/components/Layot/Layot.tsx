import { ReactNode } from "react"
import "../../assets/styles/app.scss"

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="wrapper">{children}</div>
}
