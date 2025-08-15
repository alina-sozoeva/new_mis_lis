import { createBrowserRouter, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <>Hello</>,
      },
    ],
  },
]);
