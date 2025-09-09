import React from "react";
import UniversalTable from "../../components/Editors/table.jsx";

export const MedicationsPage = () => {
  const columns = [
    { field: "name", label: "Название" },
    { field: "form", label: "Форма выпуска" },
    { field: "dosage", label: "Дозировка" },
    { field: "quantity", label: "Количество" },
    { field: "price", label: "Цена" },
    { field: "manufacturer", label: "Производитель" },
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
