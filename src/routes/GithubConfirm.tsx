import {
  Text,
  VStack,
  Heading,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { githubLogIn } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function GithubConfirm() {
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      const status = await githubLogIn(code);
      if (status === 200) {
        toast({
          title: "로그인 성공했군영",
          description: "반갑습니당",
          status: "success",
          position: "bottom-right",
        });
        queryClient.refetchQueries(["me"]);
        navigate("/");
      }
    }
  };

  /**
   * 화면이 처음 나타났을 때 backend에 post 요청을 보냄
   *   - url가져오기
   */
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} mt={40}>
      <Heading>로그인 중이입니다용</Heading>
      <Text>저기여! 아직 떠나지마영~~~~~~~</Text>
      <Spinner size={"lg"}></Spinner>
    </VStack>
  );
}
