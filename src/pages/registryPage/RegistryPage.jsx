import React, { useState } from "react";
import { Grid, Button } from "@mui/joy";
import Inputs from "../../components/Editors/inputs.jsx";
import CustomTreeItem from "../../components/Editors/tree.jsx";
import UniversalTable from "../../components/Editors/table.jsx";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export const RegistryPage = () => {
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
  { field: "date", label: "Дата Рег." },
  { field: "corCode", label: "Кор. код" },
  { field: "fio", label: "ФИО" },
  { field: "inn", label: "ИНН" },
  { field: "gen", label: "Пол" },
  { field: "dateBirth", label: "Дата рож." },
  { field: "phone", label: "Телефон" },
  { field: "email", label: "Email" },
  { field: "address", label: "Адрес" },
  { field: "diagnoz", label: "Диагноз" },
  { field: "comm", label: "Комментарий" },
  { field: "punkt", label: "Пункт" },
  { field: "skidka", label: "Скид." },
  { field: "percent", label: "%" },
  { field: "reg", label: "Рег." },
  { field: "corpClient", label: "Корп." },
  { field: "medUch", label: "Мед. уч" },
  { field: "doctor", label: "Доктор" },
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
    { field: "department", label: "Отдел" },
    { field: "number", label: "Номер" },
    { field: "analysis", label: "Анализ" },
    { field: "package", label: "Пакет" },
    { field: "cito", label: "ЦИТО" },
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
    <div style={{background: "#fff", height:"100%" }}>

      <Grid container spacing={2} style={{ marginBottom: 0, display:"flex", alignItems: "center"}}>
         <Grid item xs={12} md={3} style={{ width: "220px"}}>
          <Inputs
            placeholder="Поиск по qr-коду"
            type="text" 
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ width: "220px"}}>
          <Inputs
            label="От"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3} style={{ width: "220px"}}>
          <Inputs
            label="До"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="solid" color="primary" onClick={handleUpdate}>
            Обновить [0]
          </Button>
        </Grid>
      </Grid>

      {/* Таблица реестра */}
      <div style={{display: "flex", gap:2,height:"70%"}}>
      <div style={{width:"80%",display: "flex",flexDirection:"column",justifyContent:"space-between" }}>
        {/* Здесь будет ваша таблица заказов */}
         <UniversalTable rows={patientRows} columns={patientColumns} />
      <UniversalTable rows={analysisRows} columns={analysisColumns} />
      
      </div>

      {/* Фильтр справа */}
  

      <div style={{ width:"20%", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
             <CustomTreeItem />
        <div style={{ flex: 1, border: "1px solid #9a9a9a1f", padding: 4}}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={12} className="filter-grid">
              <Inputs label="от" type="date"  value={toDate}
            onChange={(e) => setToDate(e.target.value)} />
            </Grid>
            <Grid item xs={12} md={12} className="filter-grid">
              <Inputs label="до" type="date"  value={toDate}
            onChange={(e) => setToDate(e.target.value)} />
            </Grid>
            <Grid item xs={12} md={12} className="filter-grid">
              <Inputs label="ИНН пациента" placeholder="Введите ИНН" />
            </Grid>
            <Grid item xs={12} md={12} className="filter-grid">
              <Inputs label="ФИО пациента" placeholder="Введите ФИО" />
            </Grid>
            <Grid item xs={12} md={12} className="filter-grid">
              <Inputs label="Телефон пациента" placeholder="Введите телефон" />
            </Grid>
          </Grid>

          <div style={{ marginTop: 16, display: "flex", justifyContent:"end" }}>
            <Button variant="solid" color="primary" onClick={handleSearch}>
              Найти
            </Button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};
