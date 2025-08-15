import { createBrowserRouter, Outlet } from "react-router-dom";
import * as Pages from "../pages";
import { MainLayout } from "../components";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Pages.RegisterPage /> },
      { path: "/register", element: <Pages.RegisterPage /> },
      { path: "/orders", element: <div>Реестр заказов</div> },
      { path: "/logistics", element: <div>Логистика</div> },
      { path: "/sorting", element: <div>Сортировка</div> },
      { path: "/placement", element: <div>Постановка</div> },
      { path: "/results", element: <div>Ввод результатов</div> },
      { path: "/references", element: <div>Справочники</div> },
      { path: "/reports", element: <div>Отчеты</div> },
    ],
  },
]);
