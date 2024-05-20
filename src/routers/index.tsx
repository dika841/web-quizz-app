import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./home/default";
import { HomeLayout } from "./home/layout";
import { LoginPage } from "./home/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ path: "", element: <LandingPage /> }],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
