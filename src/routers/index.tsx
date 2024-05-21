import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./home/default";
import { HomeLayout } from "./home/layout";
import { LoginPage } from "./home/login";
import { AuthLayout } from "./home/modules/auth/auth-layout";
import { RegisterPage } from "./home/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ path: "", element: <LandingPage /> }],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
