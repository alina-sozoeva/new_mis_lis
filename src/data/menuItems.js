import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

export const menuItems = [
  { key: "calendar", label: "Календарь", icon: CalendarMonthOutlinedIcon },
  { key: "registration", label: "Регистрация", icon: PersonAddOutlinedIcon },
  { key: "registry", label: "Реестр", icon: AssignmentOutlinedIcon },
  { key: "treatment", label: "Лечение", icon: LocalHospitalOutlinedIcon },
  { key: "stationary", label: "Стационар", icon: LocalShippingOutlinedIcon },
  { key: "lis", label: "ЛИС", icon: MedicalServicesOutlinedIcon },
  { key: "medications", label: "Медикаменты", icon: PlaylistAddOutlinedIcon },
  { key: "reports", label: "Отчёты", icon: AssessmentOutlinedIcon },
  { key: "analytics", label: "Аналитика", icon: AnalyticsOutlinedIcon },
  { key: "settings", label: "Настройки", icon: SettingsOutlinedIcon },
  { key: "help", label: "Помощь", icon: HelpOutlineOutlinedIcon },
];
