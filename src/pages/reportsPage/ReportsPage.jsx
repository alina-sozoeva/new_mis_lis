import { useState } from "react";
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
    { key: "date", label: "Дата" },
    { key: "corCode", label: "Кор. Код" },
    { key: "fio", label: "ФИО" },
    { key: "inn", label: "ИНН" },
    { key: "gen", label: "Пол" },
    { key: "dateBirth", label: "Дата Рожд." },
    { key: "phone", label: "Телефон" },
    { key: "email", label: "Email" },
    { key: "punkt", label: "Пункт" },
    { key: "skidka", label: "Скидка" },
    { key: "reg", label: "Рег." },
    { key: "doctor", label: "Доктор" },
  ];

 

  return ( 
      <div className="p-4">
 

        {/* Фильтры */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
           <Grid xs={12} md={2}>
            <Inputs 
              placeholder="Поиск"
              labelPosition="left"
            />
          </Grid>
          <Grid xs={12} md={2}>
            <Inputs label=" от" type="date" required labelPosition="left" />
          </Grid>
          <Grid xs={12} md={2}>
            <Inputs label=" до" type="date" required labelPosition="left" />
          </Grid>
         
        </Grid>

        <Divider sx={{ mb: 2 }} />

        <UniversalTable rows={rows} columns={columns1} />

        <Divider sx={{ my: 3 }} />
 

        {/* Кнопки */}
        <div className="flex gap-2 mt-4" style={{gap:"5px", display:"flex"}}>
          <Button color="primary">Сформировать отчет</Button>
          <Button color="success">Экспорт в Excel</Button>
        </div>
      </div>
   
  );
};
