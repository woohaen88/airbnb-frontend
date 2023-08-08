import { Grid } from "@chakra-ui/react";

import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { useEffect, useState } from "react";

interface IPhotos {
  id: number;
  file: string;
  description: string;
}

interface IRoom {
  id: number;
  title: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhotos[];
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const fetchRooms = async () => {
    const response = await fetch("http://localhost:8000/api/v1/rooms/");
    const json = await response.json();
    setRooms(json);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchRooms();
  });
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
      {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {rooms.map((room) => (
        <Room
          imageUrl={room.photos[0].file}
          title={room.title}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  );
}
