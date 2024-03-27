import { Box, Button, Image, Input, Text, useToast } from "@chakra-ui/react"
import logo from "../assets/logo technopartner.png"
import { useState } from "react"
import { axiosInstance } from "../API/api"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const toast = useToast()
  const navigate = useNavigate()

  console.log(userName)
  console.log(password)
  const loginUser = async () => {
    try {
      const response = await axiosInstance.post("/oauth/token", {
        grant_type: "password",
        client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
        client_id: "e78869f77986684a",
        username: userName,
        password: password,
      })

      localStorage.setItem("auth_token", response.data.access_token)
      navigate("/")
      console.log(response)
    } catch (err) {
      if (
        err.response.data.message === "The user credentials were incorrect."
      ) {
        toast({
          title: "Wrong Password",
          status: "error",
          position: "bottom",
        })
      }
      console.log(err)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      loginUser()
    }
  }
  return (
    <>
      <Box margin="auto" alignItems="center">
        <Box maxW="480px" display="flex" margin="auto" flexDirection="column">
          <Box px={10} mt={20}>
            <Image src={logo} w="100%" />
          </Box>
          <Box
            margin="auto"
            alignItems="center"
            display="flex"
            flexDir="column"
            textAlign="center"
            mt={20}
          >
            <Text color="#CACACA" mb={2}>
              Email
            </Text>
            <Input
              w="100%"
              mb={5}
              borderRadius={5}
              onChange={(e) => setUserName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Text color="#CACACA" mb={2}>
              Password
            </Text>
            <Input
              w="100%"
              onChange={(e) => setPassword(e.target.value)}
              borderRadius={5}
              onKeyPress={handleKeyPress}
            />
            <Button
              mt="7"
              w="45%"
              bgColor="white"
              boxShadow="md"
              fontWeight="bold"
              onClick={loginUser}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login
