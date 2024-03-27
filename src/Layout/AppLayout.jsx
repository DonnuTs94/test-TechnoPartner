import { Box } from "@chakra-ui/react"
import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  if (!localStorage.getItem("auth_token")) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Box>
        <Outlet />
        <Navbar />
      </Box>
    </>
  )
}

export default AppLayout
