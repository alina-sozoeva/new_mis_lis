import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"; // паспорт/данные
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined"; // амбулаторная
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined"; // оплата
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined"; // история
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"; // звонки
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"; // обращение/образование
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined"; // ЛИС
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined"; // медикаменты

export const registrationTabs = [
  { key: "passport", icon: BadgeOutlinedIcon, value: "Паспорт данные" },
  { key: "ambulatory", icon: LocalHospitalOutlinedIcon, value: "Амбулаторная" },
  { key: "payment", icon: PaymentOutlinedIcon, value: "Оплата" },
  { key: "history", icon: HistoryOutlinedIcon, value: "История" },
  { key: "calls", icon: CallOutlinedIcon, value: "Звонки" },
  { key: "education", icon: SchoolOutlinedIcon, value: "Обращение" },
  { key: "lis", icon: MedicalServicesOutlinedIcon, value: "ЛИС" },
  { key: "medications", icon: MedicationOutlinedIcon, value: "Медикаменты" },
];
