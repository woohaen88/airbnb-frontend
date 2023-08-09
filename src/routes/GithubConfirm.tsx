import { Text, VStack, Heading, Button, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { githubLogIn } from "../api";

export default function GithubConfirm() {
  const { search } = useLocation();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      await githubLogIn(code);
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
