import React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { Tooltip } from "@mui/material";

export const tabs = [
  { key: "calendar", label: "Календарь", icon: CalendarMonthIcon },
  { key: "registration", label: "Регистрация", icon: PersonAddIcon },
  { key: "registry", label: "Реестр", icon: AssignmentIcon },
  { key: "treatment", label: "Лечение", icon: LocalHospitalIcon },
  { key: "stationary", label: "Стационар", icon: LocalShippingIcon },
  { key: "lis", label: "ЛИС", icon: MedicalServicesIcon },
  { key: "medications", label: "Медикаменты", icon: PlaylistAddIcon },
  { key: "reports", label: "Отчёты", icon: AssessmentIcon },
  { key: "analytics", label: "Аналитика", icon: AnalyticsIcon },
  { key: "settings", label: "Настройки", icon: SettingsIcon },
  { key: "help", label: "Помощь", icon: HelpOutlineIcon },
];

export const MainLayout = () => {
  const navigation = tabs.map((tab) => {
    const Icon = tab.icon;
    return {
      segment: "registration",
      key: tab.key,
      icon: (
        <Tooltip title={tab.label}>
          <Icon />
        </Tooltip>
      ),
    };
  });

  return (
    <AppProvider navigation={navigation}>
      <DashboardLayout defaultSidebarCollapsed disableSidebarExpand>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
};
