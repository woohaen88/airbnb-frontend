import {
  Box,
  HStack,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onClose: onSignupClose,
    onOpen: onSignupOpen,
  } = useDisclosure();
  return (
    <HStack justifyContent={"space-between"} py={"5"} px={"10 "}>
      <Box color={"red.500"}>
        <Link to={"/"}>
          <FaAirbnb size={"48"} />
        </Link>
      </Box>
      <HStack spacing={"2"}>
        <IconButton
          variant={"ghost"}
          aria-label={"Toggle dark mode"}
          icon={<FaMoon />}
        />
        <Button onClick={onLoginOpen}>Log In</Button>
        <Button onClick={onSignupOpen} colorScheme={"red"}>
          Sign Up
        </Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </HStack>
  );
}
