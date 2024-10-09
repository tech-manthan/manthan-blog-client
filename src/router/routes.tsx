import { RouteObject } from "react-router-dom";
import { Editor, ForgotPassword, Home, Login, Register } from "../pages";
import { AuthRoutes, NonAuthRoutes, Root } from "../layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "nonauth",
        element: <NonAuthRoutes />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthRoutes />,
        children: [
          {
            path: "editor",
            element: <Editor />,
          },
        ],
      },
    ],
  },
];

export default routes;
