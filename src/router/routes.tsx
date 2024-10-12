import { RouteObject } from "react-router-dom";
import {
  Analytics,
  BlogsViewer,
  Dashboard,
  Editor,
  ForgotPassword,
  Home,
  Login,
  Profile,
  Register,
} from "../pages";
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
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "",
                element: <Analytics />,
              },
              {
                path: "blogs",
                element: <BlogsViewer />,
              },
            ],
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "setting",
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

export default routes;
