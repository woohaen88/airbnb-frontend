import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  withCredentials: true,
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomId] = queryKey;
  return instance.get(`rooms/${roomId}/`).then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomId] = queryKey;
  return instance
    .get(`rooms/${roomId}/reviews/`)
    .then((response) => response.data);
};

export const getMe = () =>
  instance.get("users/me/").then((response) => response.data);

export const logOut = () => {
  console.log(Cookie.get("access_token"));
  return instance
    .post("users/logout/", null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",        
      },
    })
    .then((response) => response.data);
};
