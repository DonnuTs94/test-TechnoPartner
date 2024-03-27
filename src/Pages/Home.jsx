import { Box, Image, Text } from "@chakra-ui/react"
import HomeLogo from "../components/HomeLogo"
import { axiosInstance } from "../API/api"
import { useEffect, useState } from "react"
import motif from "../assets/motif.png"
import { convertPriceWithCommas } from "../helper/formatter"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { ChevronRightIcon } from "@chakra-ui/icons"

const Home = () => {
  const [homeData, setHomeData] = useState([])

  const getHomeData = async () => {
    try {
      const response = await axiosInstance.get("api/home")
      setHomeData(response.data.result)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(homeData)

  useEffect(() => {
    getHomeData()
  }, [])

  return (
    <>
      <HomeLogo />
      <Box
        maxW="480px"
        margin="auto"
        alignItems="center"
        bgColor="#F8F9FB"
        minH="100vh"
      >
        <Box
          backgroundImage={`url(${motif})`}
          backgroundSize="cover"
          backgroundPosition="center"
          h="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            margin="auto"
            backgroundColor="white"
            w="90%"
            h="160px"
            borderRadius={5}
            boxShadow="lg"
          >
            <Box p={4}>
              <Text mb={1}>{homeData.greeting},</Text>
              <Text fontWeight="bold">{homeData.name},</Text>
              <Box display="flex" gap={10} alignItems="center" mt={3}>
                <Box boxShadow="lg" borderRadius="full" p="10px" width={58}>
                  <Image src={homeData.qrcode} w="100%" />
                </Box>
                <Box display="flex" flexDirection="column" w="100%">
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    px={5}
                  >
                    <Text>Saldo</Text>
                    <Text fontWeight="bold">
                      Rp {convertPriceWithCommas(homeData.saldo)}
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    px={5}
                  >
                    <Text>Point</Text>
                    <Text color="#8FD6BD">
                      {convertPriceWithCommas(homeData.point)}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Carousel showStatus={0} showArrows={0}>
          {homeData?.banner?.map((img, i) => (
            <Box key={i}>
              <Image src={img} />
            </Box>
          ))}
        </Carousel>
        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          mt="-35px"
          gap={2}
          pr={3}
          bg={"white"}
          pb={4}
        >
          <Text color="#8FD6BD">View all</Text>
          <ChevronRightIcon />
        </Box>
      </Box>
    </>
  )
}

export default Home
