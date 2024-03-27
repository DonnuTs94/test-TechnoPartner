import { Box, Image } from "@chakra-ui/react"
import logo from "../assets/logo technopartner.png"

const HomeLogo = () => {
  return (
    <>
      <Box>
        <Image src={logo} h={70} ml={5} />
      </Box>
    </>
  )
}

export default HomeLogo
