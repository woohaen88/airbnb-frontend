import {createBrowserRouter} from "react-router-dom";
import Root from "./components/Root";
import React from "react";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);



export default router;