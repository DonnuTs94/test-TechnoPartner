import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const ModalQr = ({ isOpen, onClose, qr }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton _hover={"none"} border="none" />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
              <Text mb={10}>Show the QR Code below to the cashier.</Text>
              <Box margin="auto" display="flex" justifyContent="center">
                <Image src={qr} w="80%" />
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalQr
