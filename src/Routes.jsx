import { createBrowserRouter } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import AppLayout from "./Layout/AppLayout"

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/menu", Component: Menu },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
])

export { router }
