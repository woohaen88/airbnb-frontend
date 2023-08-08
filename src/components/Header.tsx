import {
  Box,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  LightMode,
  useColorModeValue,
  VStack,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
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
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      py={"5"}
      px={"40"}
      borderBottomWidth={1}
      direction={{ sm: "column", md: "row" }}
      spacing={{
        sm: 3,
        md: 0,
      }}
    >
      <Box color={logoColor}>
        <Link to={"/"}>
          <FaAirbnb size={"48"} />
        </Link>
      </Box>
      <HStack spacing={"2"}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label={"Toggle dark mode"}
          icon={<Icon />}
        />
        <Button onClick={onLoginOpen}>Log In</Button>
        <LightMode>
          <Button onClick={onSignupOpen} colorScheme={"red"}>
            Sign Up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </Stack>
  );
}
