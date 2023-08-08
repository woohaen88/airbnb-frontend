import {
  Image,
  Text,
  Box,
  VStack,
  Button,
  Grid,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} rounded={"3xl"} mb={3} overflow={"hidden"}>
        <Image
          minH={"280"}
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-574843000111312410/original/acdd719e-d7c1-4a4d-8852-fbe1dc49f6b5.jpeg?im_w=1200"
        />
        <Button
          variant={"unstyled"}
          cursor={"pointer"}
          position={"absolute"}
          right={0}
          top={0}
          color={"white"}
        >
          <FaRegHeart size={"15"} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} noOfLines={1} fontSize={"md"}>
            Dolsan-eup, Yeosu-si, 전라남도, 한국
          </Text>
          <HStack
            _hover={{
              color: "red.100",
            }}
            color={"gray"}
            spacing={1}
          >
            <FaStar size={"15"} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          Seoul, S. Korea
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>$72</Text> / night
      </Text>
    </VStack>
  );
}
