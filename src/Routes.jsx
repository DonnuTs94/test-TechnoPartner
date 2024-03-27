import { createBrowserRouter } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./Pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
])

export { router }
