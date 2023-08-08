import axios from "axios";



const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
});

export const getRooms = () => 
    instance.get("rooms/").then((response) => response.data)


