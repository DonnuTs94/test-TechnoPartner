import { Box, Image, Text } from "@chakra-ui/react"
import homeIcon1 from "../assets/home1.png"
import homeIcon2 from "../assets/home2.png"
import menuIcon1 from "../assets/menu1.png"
import menuIcon2 from "../assets/menu2.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const togglePage = (page) => {
    if (currentPage !== page) {
      setCurrentPage(page)
    }
  }

  return (
    <>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        width="100%"
        boxShadow="dark-lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        zIndex="1000"
        margin="auto"
        px={20}
        py={5}
        maxW="480px"
      >
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          onClick={() => togglePage("home")}
          cursor="pointer"
        >
          <Link to={"/"}>
            <Image
              src={currentPage === "home" ? homeIcon1 : homeIcon2}
              boxSize="30px"
            />
            <Text>Home</Text>
          </Link>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          onClick={() => togglePage("menu")}
          cursor="pointer"
        >
          <Link to={"/menu"}>
            <Image
              src={currentPage === "home" ? menuIcon2 : menuIcon1}
              boxSize="24px"
            />
            <Text>Menu</Text>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
