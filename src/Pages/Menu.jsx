import { useEffect, useState } from "react"
import { axiosInstance } from "../API/api"
import { Box, Image, Text } from "@chakra-ui/react"
import { convertPriceWithCommas } from "../helper/formatter"

const Menu = () => {
  const [menuData, setMenuData] = useState([])
  const [activeItem, setActiveItem] = useState(null)

  const getMenuData = async () => {
    try {
      const response = await axiosInstance.post("api/menu")
      setMenuData(response.data.result.categories)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(menuData)

  useEffect(() => {
    getMenuData()
  }, [])

  useEffect(() => {
    if (menuData.length > 0) {
      setActiveItem(menuData[0].category_name)
    }
  }, [menuData])

  return (
    <Box maxW="480px" margin="auto">
      <Box textAlign="center" fontSize="25px" fontWeight="bold" py={5}>
        Menu
      </Box>
      {menuData?.map((item, i) => (
        <Box key={i} px={4}>
          <Box
            borderBottom={
              activeItem === item.category_name
                ? "3px solid black"
                : "3px solid transparent"
            }
            paddingBottom={2}
            fontWeight={activeItem === item.category_name ? "bold" : "normal"}
            color={activeItem === item.category_name ? "black" : "#D5D5D5"}
            onClick={() => setActiveItem(item.category_name)}
            cursor="pointer"
            w="fit-content"
          >
            <Text>{item.category_name}</Text>
          </Box>

          <Text py={4} fontWeight="bold" bgColor="#F8F9FB">
            {item.category_name}
          </Text>
          {item?.menu?.map((menu, i) => (
            <Box key={i} py={3} display="flex">
              <Box w="80px" flexShrink={0}>
                <Image src={menu.photo} w="100%" objectFit="cover" />
              </Box>
              <Box>
                <Box display="flex" justifyContent="space-between" w="100%">
                  <Text fontWeight="bold">{menu.name}</Text>
                  <Text fontWeight="bold">
                    {convertPriceWithCommas(menu.price)}
                  </Text>
                </Box>
                <Text fontSize="xs" color="#D4D4D4" w="80%">
                  {menu.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Menu
