import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
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
