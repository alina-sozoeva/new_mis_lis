import React from "react";
import { useTranslation } from "react-i18next";
import UniversalTable from "../../components/Editors/table.jsx";

export const MedicationsPage = () => {
  const { t } = useTranslation();

  const columns = [
    { field: "name", label: t("medications.table.name") },
    { field: "form", label: t("medications.table.form") },
    { field: "dosage", label: t("medications.table.dosage") },
    { field: "quantity", label: t("medications.table.quantity") },
    { field: "price", label: t("medications.table.price") },
    { field: "manufacturer", label: t("medications.table.manufacturer") },
  ];

  const rows = [
    {
      name: "Парацетамол",
      form: "Таблетки",
      dosage: "500 мг",
      quantity: 20,
      price: "150 ₸",
      manufacturer: "Дарница",
    },
    {
      name: "Амоксициллин",
      form: "Капсулы",
      dosage: "250 мг",
      quantity: 16,
      price: "350 ₸",
      manufacturer: "Sandoz",
    },
    {
      name: "Ибупрофен",
      form: "Суспензия",
      dosage: "100 мг/5 мл",
      quantity: "100 мл",
      price: "450 ₸",
      manufacturer: "Bayer",
    },
  ];

  return (
    <div style={{ padding: 16 }}>
      <UniversalTable columns={columns} rows={rows} />
    </div>
  );
};
