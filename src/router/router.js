import { createBrowserRouter, Outlet } from "react-router-dom";
import * as Pages from "../pages";
import { MainLayout } from "../components";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <>Hello</> },
      { path: "/register", element: <Pages.RegisterPage /> },
    ],
  },
]);
