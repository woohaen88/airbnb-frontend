import {Button, Heading, Text, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function NotFound(){
    return <VStack bg={"gray.100"} justifyContent={"center"} minH={"100vh"}>
        <Heading>Page not found</Heading>
        <Text>저기여! 이 페이지는 존재하지 않아여.</Text>
        <Link to={"/"}>
            <Button variant={"link"} colorScheme={"red"}>Go Home &rarr;</Button>
        </Link>
    </VStack>
}