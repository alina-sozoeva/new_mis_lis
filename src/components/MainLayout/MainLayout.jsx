import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SortIcon from "@mui/icons-material/Sort";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import InputIcon from "@mui/icons-material/Input";
import BookIcon from "@mui/icons-material/Book";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <AppProvider
      navigation={[
        {
          segment: "register",
          title: "Регистрация",
          icon: <PersonAddIcon />,
        },
        {
          segment: "register",
          title: "Реестр заказов",
          icon: <AssignmentIcon />,
        },
        {
          segment: "register",
          title: "Логистика",
          icon: <LocalShippingIcon />,
        },
        {
          segment: "register",
          title: "Сортировка",
          icon: <SortIcon />,
        },
        {
          segment: "register",
          title: "Постановка",
          icon: <PlaylistAddIcon />,
        },
        {
          segment: "register",
          title: "Ввод результатов",
          icon: <InputIcon />,
        },
        {
          segment: "register",
          title: "Справочники",
          icon: <BookIcon />,
        },
        {
          segment: "register",
          title: "Отчеты",
          icon: <AssessmentIcon />,
        },
      ]}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
};
