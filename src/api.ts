import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";



const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
});

export const getRooms = () => 
    instance.get("rooms/").then((response) => response.data)


export const  getRoom = ({queryKey}: QueryFunctionContext) => {
    const [_, roomId] = queryKey
    return instance.get(`rooms/${roomId}/`).then((response)=>response.data)
}
    