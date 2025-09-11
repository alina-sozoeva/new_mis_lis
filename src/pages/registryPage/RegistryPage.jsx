import React, { useState } from "react";
import { Grid, Button } from "@mui/joy";
import Inputs from "../../components/Editors/inputs.jsx";
import CustomTreeItem from "../../components/Editors/tree.jsx";
import UniversalTable from "../../components/Editors/table.jsx";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { useTranslation } from "react-i18next";

export const RegistryPage = () => {
  const { t } = useTranslation();
  const [fromDate, setFromDate] = useState("2025-09-07");
  const [toDate, setToDate] = useState("2025-09-08");

  const handleUpdate = () => {
    console.log("Обновить реестр заказов");
  };

  const handleSearch = () => {
    console.log("Поиск по фильтру");
  };

  const handleClear = () => {
    console.log("Очистить фильтр");
  };

  const patientColumns = [
    { field: "date", label: t("registry.table.columns.date") },
    { field: "corCode", label: t("registry.table.columns.corCode") },
    { field: "fio", label: t("registry.table.columns.fio") },
    { field: "inn", label: t("registry.table.columns.inn") },
    { field: "gen", label: t("registry.table.columns.gen") },
    { field: "dateBirth", label: t("registry.table.columns.dateBirth") },
    { field: "phone", label: t("registry.table.columns.phone") },
    { field: "email", label: t("registry.table.columns.email") },
    { field: "address", label: t("registry.table.columns.address") },
    { field: "diagnoz", label: t("registry.table.columns.diagnoz") },
    { field: "comm", label: t("registry.table.columns.comm") },
    { field: "punkt", label: t("registry.table.columns.punkt") },
    { field: "skidka", label: t("registry.table.columns.skidka") },
    { field: "percent", label: t("registry.table.columns.percent") },
    { field: "reg", label: t("registry.table.columns.reg") },
    { field: "corpClient", label: t("registry.table.columns.corpClient") },
    { field: "medUch", label: t("registry.table.columns.medUch") },
    { field: "doctor", label: t("registry.table.columns.doctor") },
  ];

  const patientRows = [
    {
      date: "12.03.2025, 13:49:35",
      corCode: 2332,
      fio: "Базарбаева Влада Бериковна",
      inn: "",
      gen: "Ж",
      dateBirth: "30.07.1997",
      phone: "",
      email: "med.sister@akvamed.kz",
      address: "",
      diagnoz: "",
      comm: "",
      punkt: "АЛМ АкваМед+",
      skidka: 0,
      percent: "",
      reg: "alm.aquamed",
      corpClient: "",
      medUch: "",
      doctor: "Без врача",
    },
  ];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const analysisColumns = [
    { field: "department", label: t("registry.analysis.department") },
    { field: "number", label: t("registry.analysis.number") },
    { field: "analysis", label: t("registry.analysis.analysis") },
    { field: "package", label: t("registry.analysis.package") },
    { field: "cito", label: t("registry.analysis.cito") },
    { field: "l", label: "Л" },
    { field: "s", label: "С" },
    { field: "p", label: "П" },
    {
      field: "g",
      label: "Г",
      render: () => <Checkbox />, // чекбокс
    },
  ];

  const analysisRows = [
    {
      department: "03. Клиника",
      number: "HS009",
      analysis: "МНО",
      package: "",
      cito: "",
      l: "",
      s: "",
      p: "",
      g: false,
    },
  ];

  return (
    <div style={{ background: "#fff", height: "100%" }}>
      <Grid
        container
        spacing={2}
        style={{ marginBottom: 0, display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={3} style={{ width: "220px" }}>
          <Inputs
            placeholder={t("registry.filters.qr.placeholder")}
            type="text"
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ width: "220px" }}>
          <Inputs
            label={t("registry.filters.from")}
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ width: "220px" }}>
          <Inputs
            label={t("registry.filters.to")}
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="solid" color="primary" onClick={handleUpdate}>
            {t("common.buttons.update")} [0]
          </Button>
        </Grid>
      </Grid>

      {/* Таблица реестра */}
      <div style={{ display: "flex", gap: 2, height: "70%" }}>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Здесь будет ваша таблица заказов */}
          <UniversalTable rows={patientRows} columns={patientColumns} />
          <UniversalTable rows={analysisRows} columns={analysisColumns} />
        </div>

        {/* Фильтр справа */}

        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <CustomTreeItem />
          <div style={{ flex: 1, border: "1px solid #9a9a9a1f", padding: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} className="filter-grid">
                <Inputs
                  label={t("registry.filters.from")}
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12} className="filter-grid">
                <Inputs
                  label={t("registry.filters.to")}
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12} className="filter-grid">
                <Inputs
                  label={t("registry.filters.inn.label")}
                  placeholder={t("registry.filters.inn.placeholder")}
                />
              </Grid>
              <Grid item xs={12} md={12} className="filter-grid">
                <Inputs
                  label={t("registry.filters.fio.label")}
                  placeholder={t("registry.filters.fio.placeholder")}
                />
              </Grid>
              <Grid item xs={12} md={12} className="filter-grid">
                <Inputs
                  label={t("registry.filters.phone.label")}
                  placeholder={t("registry.filters.phone.placeholder")}
                />
              </Grid>
            </Grid>

            <div
              style={{ marginTop: 16, display: "flex", justifyContent: "end" }}
            >
              <Button variant="solid" color="primary" onClick={handleSearch}>
                {t("common.buttons.search")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
