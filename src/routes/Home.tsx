import {
  Box,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={40}
      columnGap={4}
      rowGap={8}
      templateColumns={"repeat(5, 1fr)"}
    >
      <VStack alignItems={"flex-start"}>
        <Box rounded={"3xl"} mb={3} overflow={"hidden"}>
          <Image
            h={"280"}
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-574843000111312410/original/acdd719e-d7c1-4a4d-8852-fbe1dc49f6b5.jpeg?im_w=1200"
          ></Image>
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text as={"b"} noOfLines={1} fontSize={"md"}>
              Dolsan-eup, Yeosu-si, 전라남도, 한국
            </Text>
            <HStack spacing={1}>
              <FaStar size={"15"} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize={"sm"} color={"gray.600"}>
            Seoul, S. Korea
          </Text>
        </Box>
        <Text fontSize={"sm"} color={"gray.600"}>
          <Text as={"b"}>$72</Text> / night
        </Text>
      </VStack>
    </Grid>
  );
}
