import {Outlet} from "react-router-dom";
import {
    Box,
    Button, Divider,
    HStack,
    IconButton, Input, InputGroup, InputLeftElement,
    Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Text,
    useDisclosure, VStack
} from "@chakra-ui/react";
import {FaAirbnb, FaComment, FaEnvelope, FaGithub, FaLock, FaMoon} from "react-icons/fa";

export default function Root() {
    const {isOpen, onClose, onOpen} = useDisclosure();
    return <Box>
        <HStack justifyContent={"space-between"} py={"5"} px={"10 "}>
            <Box color={"red.500"}>
                <FaAirbnb size={"48"}/>
            </Box>
            <HStack spacing={"2"}>
                <IconButton variant={"ghost"} aria-label={"Toggle dark mode"} icon={<FaMoon/>}/>
                <Button onClick={onOpen}>Log In</Button>
                <Button colorScheme={"red"}>Sign Up</Button>
            </HStack>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Log in</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack>
                            <InputGroup>
                                <InputLeftElement children={<Box color={"gray.500"}>
                                    <FaEnvelope/>
                                </Box>}/>
                                <Input variant={"filled"} placeholder={"email"}></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<Box color={"gray.500"}>
                                    <FaLock/>
                                </Box>}/>
                                <Input variant={"filled"} placeholder={"password"}></Input>
                            </InputGroup>

                        </VStack>
                        <Button mt={"4"} colorScheme={"red"} w={"100%"}>Log in</Button>
                        <HStack my={"8"}>
                            <Divider>
                                <Text textTransform={"uppercase"} color="gray.500" fontSize={"xs"} as={"b"}>Or</Text>
                            </Divider>
                        </HStack>
                        <Button w={"100%"} leftIcon={<FaGithub/>}colorScheme={"telegram"} >Continue with Github</Button>
                        <Button w={"100%"} leftIcon={<FaComment/>} colorScheme={"yellow"}>Continue with Kakao</Button>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </HStack>
        <Outlet/>
    </Box>;
}