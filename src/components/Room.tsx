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

interface IRoomProps {
  imageUrl: string;
  title: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({
  imageUrl,
  title,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} rounded={"3xl"} mb={3} overflow={"hidden"}>
        <Image minH={"280"} src={imageUrl} />
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
            {title}
          </Text>
          <HStack
            _hover={{
              color: "red.100",
            }}
            color={"gray"}
            spacing={1}
          >
            <FaStar size={"15"} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          {city}, {country}
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>${price}</Text> / night
      </Text>
    </VStack>
  );
}
