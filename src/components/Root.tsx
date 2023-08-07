import {Outlet} from "react-router-dom";
import {Box, Button, HStack} from "@chakra-ui/react";
import {FaAirbnb} from "react-icons/fa";

export default function Root() {
    return <Box>
        <HStack justifyContent={"space-between"} py={"5"} px={"10 "}>
            <Box color={"red.500"}>
                <FaAirbnb size={"38"}/>
            </Box>
            <HStack spacing={"2"}>
                <Button>Log In</Button>
                <Button colorScheme={"red"}>Sign Up</Button>
            </HStack>
        </HStack>
            <Outlet/>
        </Box>;
}