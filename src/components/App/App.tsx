import "../../assets/styles/app.scss"
import { BrowserRouter } from "react-router-dom"
import { Layout } from "../Layot/Layot.tsx"
import { Pages } from "../Pages/Pages.tsx"
import { Provider } from "react-redux"
import { store } from "../../store/store.ts"

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Pages />
        </Layout>
      </Provider>
    </BrowserRouter>
  )
}
