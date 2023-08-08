import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "../api";
import { IRoomDetail, IRoomReview } from "../types";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Skeleton,
  VStack,
  Text,
  Avatar,
  Container,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Roomdetail() {
  const { roomId } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>([`rooms`, roomId], getRoom);

  const { isLoading: reviewIsLoading, data: reviewData } = useQuery<
    IRoomReview[]
  >(["room", roomId, "reviews"], getRoomReviews);

  return (
    <Box
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Skeleton height={"43"} isLoaded={!isLoading}>
        <Heading>{data?.title}</Heading>
      </Skeleton>
      <Grid
        mt={8}
        gap={2}
        overflow={"hidden"}
        rounded={"xl"}
        height={"60vh"}
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h={"100%"} w={"100%"}>
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack
        justifyContent={"space-between"}
        fontSize={"xl"}
        mt={10}
        w={"50%"}
      >
        <VStack alignItems={"flex-start"}>
          <Skeleton isLoaded={!isLoading} height={"30"}>
            <Heading>House hosted by {data?.owner.username}</Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} height={"30"}>
            <HStack justifyContent={"flex-start"} w={"100%"}>
              <Text>
                {data?.toilets} toilet{data?.toilets === 1 ? "" : "s"}
              </Text>
              <Text>•</Text>
              <Text>
                {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar
          size={"xl"}
          src={data?.owner.avatar}
          name={data?.owner.username}
        />
      </HStack>
      <Box mt={10}>
        <Skeleton isLoaded={!reviewIsLoading} w={"10%"}>
          <Heading mb={5} fontSize={"2xl"}>
            <HStack>
              <FaStar /> <Text>{data?.rating}</Text>
              <Text>•</Text>
              <Text>
                {reviewData?.length} review{reviewData?.length === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Heading>
        </Skeleton>
        <Container mt={15} maxW={"container.xl"} marginX={"none"}>
          <Grid gap={10} templateColumns={"1fr 1fr"}>
            {reviewData?.map((review) => (
              <Skeleton key={review.id} isLoaded={!reviewIsLoading}>
                <VStack alignItems={"flex-start"}>
                  <HStack>
                    <Avatar
                      name={review.user.username}
                      src={review.user.avatar}
                      size={"md"}
                    />
                    <VStack spacing={0} alignItems={"flex-start"}>
                      <Heading fontSize={"md"}>{review.user.username}</Heading>
                      <HStack spacing={1}>
                        <FaStar size={"12"} />
                        <Text>{review.rating}</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <Text>{review.payload}</Text>
                </VStack>
              </Skeleton>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
