import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./home/default";
import { HomeLayout } from "./home/layout";
import { LoginPage } from "./home/login";
import { AuthLayout } from "./home/modules/auth/auth-layout";
import { RegisterPage } from "./home/register";
import { QuizPage } from "./home/quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "quiz", element: <QuizPage /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    // loader: () =>
    //   localStorage.getItem("session")
    //     ? redirect("/quiz")
    //     : redirect("/auth/login"),
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
