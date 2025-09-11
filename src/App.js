import React, { useState } from "react";

import { pages } from "./router";
import { Tooltip, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { menuItems } from "./data";
import { Lang } from "./components";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function App() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("calendar");

  const ActivePage = pages[activeTab];

  const drawerWidth = 80;
  const headerHeight = 64;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          height: headerHeight,
          bgcolor: "#fff",
          color: "#000",
          zIndex: 1200,
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">
            {t(menuItems.find((t) => t.key === activeTab)?.label)}
          </Typography>
          <Lang />
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flex: 1, mt: `${headerHeight}px` }}>
        <Box
          sx={{
            width: drawerWidth,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
            borderRight: "1px solid #e0e0e0",
          }}
        >
          {menuItems.map((tab) => {
            const Icon = tab.icon;
            return (
              <Box
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                sx={{ mb: 2, cursor: "pointer" }}
              >
                <Tooltip title={t(tab.label)} placement="right">
                  <Icon color={activeTab === tab.key ? "primary" : "inherit"} />
                </Tooltip>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
          {ActivePage && <ActivePage />}
        </Box>
      </Box>
    </Box>
  );
}
