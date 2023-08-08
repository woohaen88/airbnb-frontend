import {
  Box,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Button,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr, 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {/* {[1, 2, 3, 5, 4, 5, 6, 76, 6, 5, 4, 4, 5, 6].map((index) => (
        <Room key={index} />
      ))} */}
      <Box>
        <Skeleton height={280} mb={6} rounded={"2xl"} />
        <SkeletonText w={"50%"} noOfLines={3} />
      </Box>
      <Room />
    </Grid>
  );
}
