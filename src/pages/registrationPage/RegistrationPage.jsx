import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import {
  Passport,
  Ambulatory,
  Payment,
  History,
  Calls,
  Education,
  Lis,
  Medications,
} from "../../tabs";

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export const RegistrationPage = () => {
  const tabLabels = [
    "Паспортные данные",
    "Амбулаторная",
    "Оплата",
    "История",
    "Звонки",
    "Обращение",
    "ЛИС",
    "Медикаменты",
  ];

  const tabComponents = [
    <Passport />,
    <Ambulatory />,
    <Payment />,
    <History />,
    <Calls />,
    <Education />,
    <Lis />,
    <Medications />,
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>

      {tabComponents.map((Component, index) => (
        <TabPanel key={index} value={activeTab} index={index}>
          {Component}
        </TabPanel>
      ))}
    </Box>
  );
};
