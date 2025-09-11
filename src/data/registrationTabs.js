import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";

export const registrationTabs = [
  {
    key: "passport",
    label: "tabs.registration.passport",
    icon: BadgeOutlinedIcon,
  },
  {
    key: "ambulatory",
    label: "tabs.registration.ambulatory",
    icon: LocalHospitalOutlinedIcon,
  },
  {
    key: "payment",
    label: "tabs.registration.payment",
    icon: PaymentOutlinedIcon,
  },
  {
    key: "history",
    label: "tabs.registration.history",
    icon: HistoryOutlinedIcon,
  },
  { key: "calls", label: "tabs.registration.calls", icon: CallOutlinedIcon },
  {
    key: "education",
    label: "tabs.registration.education",
    icon: SchoolOutlinedIcon,
  },
  {
    key: "lis",
    label: "tabs.registration.lis",
    icon: MedicalServicesOutlinedIcon,
  },
  {
    key: "medications",
    label: "tabs.registration.medications",
    icon: MedicationOutlinedIcon,
  },
];
