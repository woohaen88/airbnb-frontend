import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import { IForm } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailLogin } from "../api";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const toast = useToast();
  const queryclient = useQueryClient();
  const mutation = useMutation(emailLogin, {
    onMutate: () => {},
    onSuccess: (data) => {
      toast({
        title: "로그인 성공",
        description: "로그인~",
        status: "success",
        position: "bottom-right",
      });
      onClose();
      reset();
      queryclient.refetchQueries(["me"]);
    },
    onError: (error) => {},
  });
  const onSubmit = ({ email, password }: IForm) => {
    mutation.mutate({ email, password });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.500"}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input
                isInvalid={Boolean(errors.email?.message)}
                variant={"filled"}
                placeholder={"email"}
                required
                {...register("email", {
                  required: "어이쿠 email을 까먹으면 오또케",
                })}
              />
              <Text fontSize={"sm"} colorScheme="red">
                {errors.email?.message}
              </Text>
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.500"}>
                    <FaLock />
                  </Box>
                }
              />
              <Input
                variant={"filled"}
                placeholder={"password"}
                required
                type="password"
                {...register("password", {
                  required: "비밀번호를 까먹으면 오또케~~",
                })}
              />
              <Text fontSize={"sm"} colorScheme="red">
                {errors.password?.message}
              </Text>
            </InputGroup>
            {mutation.isError ? (
              <Text fontSize={"sm"} color={"red.500"}>
                email이나 패스워드가 옳지 않아~
              </Text>
            ) : null}
          </VStack>

          <Button
            type="submit"
            isLoading={mutation.isLoading}
            mt={"4"}
            colorScheme={"red"}
            w={"100%"}
          >
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
