import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CssVarsProvider,
  Typography,
  Grid,
  Divider,
  Button,
  Checkbox,
} from "@mui/joy";
import Inputs from "../../components/Editors/inputs.jsx";
import UniversalTable from "../../components/Editors/table.jsx";

export const ReportsPage = () => {
  const { t } = useTranslation();

  // данные первой таблицы (клиенты)
  const [rows] = useState([
    {
      date: "12.03.2025, 13:49:35",
      corCode: 2332,
      fio: "Базарбаева Влада Бериковна",
      inn: "",
      gen: "Ж",
      dateBirth: "30.07.1997",
      phone: "",
      email: "med.sister@akvamed.kz",
      punkt: "АЛМ АкваМед+",
      skidka: 0,
      reg: "alm.aquamed",
      doctor: "Без врача",
    },
  ]);

  const columns1 = [
    { key: "date", label: t("reports.table.date") },
    { key: "corCode", label: t("reports.table.corCode") },
    { key: "fio", label: t("reports.table.fio") },
    { key: "inn", label: t("reports.table.inn") },
    { key: "gen", label: t("reports.table.gen") },
    { key: "dateBirth", label: t("reports.table.dateBirth") },
    { key: "phone", label: t("reports.table.phone") },
    { key: "email", label: t("reports.table.email") },
    { key: "punkt", label: t("reports.table.punkt") },
    { key: "skidka", label: t("reports.table.skidka") },
    { key: "reg", label: t("reports.table.reg") },
    { key: "doctor", label: t("reports.table.doctor") },
  ];

  return (
    <div className="p-4">
      {/* Фильтры */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={12} md={2}>
          <Inputs
            placeholder={t("reports.filters.search")}
            labelPosition="left"
          />
        </Grid>
        <Grid xs={12} md={2}>
          <Inputs
            label={t("reports.filters.from")}
            type="date"
            required
            labelPosition="left"
          />
        </Grid>
        <Grid xs={12} md={2}>
          <Inputs
            label={t("reports.filters.to")}
            type="date"
            required
            labelPosition="left"
          />
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2 }} />

      <UniversalTable rows={rows} columns={columns1} />

      <Divider sx={{ my: 3 }} />

      {/* Кнопки */}
      <div className="flex gap-2 mt-4" style={{ gap: "5px", display: "flex" }}>
        <Button color="primary">{t("common.buttons.generate")}</Button>
        <Button color="success">{t("common.buttons.export")}</Button>
      </div>
    </div>
  );
};
