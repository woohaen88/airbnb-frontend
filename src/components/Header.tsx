import {
  Box,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  LightMode,
  useColorModeValue,
  Stack,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useToast,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const { userLoading, user, isLoggedIn } = useUser();

  const toast = useToast();
  const queryClient = useQueryClient();
  const onLogOut = async () => {
    const toastId = toast({
      title: "로그아웃 중이에영~~",
      description: "다음에 또 봐여!",
      status: "loading",
      position: "bottom-right",
    });

    const response = await logOut();
    queryClient.refetchQueries(["me"]);

    toast.update(toastId, {
      status: "success",
      title: "로그아웃 성공!",
      description: "see you later!",
    });
  };
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
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log In</Button>
              <LightMode>
                <Button onClick={onSignupOpen} colorScheme={"red"}>
                  Sign Up
                </Button>
              </LightMode>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar name={user?.username} src={user?.avatar} size={"md"} />
              </MenuButton>

              <MenuList>
                <MenuItem onClick={onLogOut}>Log out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </Stack>
  );
}
