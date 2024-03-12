import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AnalyzePage from "../pages/AnalyzePage";
import NewsPage from "../pages/NewsPage";
import AuthPage from "../pages/AuthPage";
import CalcPage from "../pages/CalcPage";

import VerifyAccountPage from "../pages/VerifyAccountPage";
import NotFound from "../pages/NotFoundPage";
import UserProfilePage from "../pages/UserProfilePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     errorElement: < NotFound/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/analyze",
        element: <AnalyzePage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/calc",
        element: <CalcPage />,
      },
      {
        path: "/profile",
        element: <UserProfilePage />,
      },
      {
        path: "/verify_account/:verifyToken",
        element: <VerifyAccountPage />,
      },
      {
        path: "/profile",
        element: <UserProfilePage />,
      },
    ],
  },
]);
