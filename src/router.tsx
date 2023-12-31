import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Roomdetail from "./routes/Roomdetail";
import GithubConfirm from "./routes/GithubConfirm";
import UploadRoom from "./routes/UploadRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rooms/upload",
        element: <UploadRoom />,
      },
      {
        path: "rooms/:roomId",
        element: <Roomdetail />,
      },
      {
        path: "social",
        children: [
          {
            path: "github",
            element: <GithubConfirm />,
          },
        ],
      },
    ],
  },
]);

export default router;
