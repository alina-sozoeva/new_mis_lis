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
  { key: "calendar", label: "menu.calendar", icon: CalendarMonthOutlinedIcon },
  {
    key: "registration",
    label: "menu.registration",
    icon: PersonAddOutlinedIcon,
  },
  { key: "registry", label: "menu.registry", icon: AssignmentOutlinedIcon },
  {
    key: "treatment",
    label: "menu.treatment",
    icon: LocalHospitalOutlinedIcon,
  },
  {
    key: "stationary",
    label: "menu.stationary",
    icon: LocalShippingOutlinedIcon,
  },
  { key: "lis", label: "menu.lis", icon: MedicalServicesOutlinedIcon },
  {
    key: "medications",
    label: "menu.medications",
    icon: PlaylistAddOutlinedIcon,
  },
  { key: "reports", label: "menu.reports", icon: AssessmentOutlinedIcon },
  { key: "analytics", label: "menu.analytics", icon: AnalyticsOutlinedIcon },
  { key: "settings", label: "menu.settings", icon: SettingsOutlinedIcon },
  { key: "help", label: "menu.help", icon: HelpOutlineOutlinedIcon },
];
