import { createBrowserRouter } from "react-router-dom";
import Character from "./pages/Character";
import { Characters } from "./pages/Characters";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Characters />,
      },
      {
        path: ":id",
        element: <Character />,
      },
    ],
  },
]);
