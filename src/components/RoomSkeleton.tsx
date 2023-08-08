import { Box, HStack, Skeleton } from "@chakra-ui/react";

export default function RoomSkeleton() {
  return (
    <Box>
      <Skeleton rounded="2xl" height={"280px"} mb={5} />
      <HStack justifyContent={"space-between"}>
        <Skeleton rounded="lg" width="70%" height={5} mb={1} />
        <Skeleton rounded="lg" width="15%" height={5} />
      </HStack>
      <Skeleton rounded="lg" width="40%" height={5} mb={3} />

      <Skeleton rounded="lg" width="35%" height={5} />
    </Box>
  );
}
