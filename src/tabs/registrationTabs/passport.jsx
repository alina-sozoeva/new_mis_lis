import { useState } from "react";
import { useForm } from "react-hook-form";
import { CssVarsProvider, Typography, Grid, Divider, Button } from "@mui/joy";
import Inputs from "../../components/Editors/inputs.jsx";
import styles from "../../components/Passport/Passport.module.scss";
import { useTranslation } from "react-i18next";

export const Passport = () => {
  const { t } = useTranslation(); // перевод
  const { handleSubmit } = useForm();
  const [selectedValue, setSelectedValue] = useState("male");

  const onSubmit = (data) => console.log(data);

  const handleGenderChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const tField = (key) => ({
    label: t(`passport.fields.${key}.label`),
    placeholder: t(`passport.fields.${key}.placeholder`),
  });

  return (
    <CssVarsProvider>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px",
          background: "#fff",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        {/* Заголовок */}

        <Grid container spacing={2}>
          {/* ИНН */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("inn")} required labelPosition="left" />
          </Grid>

          {/* ФИО пациента */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("patientName")} labelPosition="left" />
          </Grid>

          {/* Дата рождения */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("birthDate")} labelPosition="left" type="date" />
          </Grid>

          {/* ФИО врача */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("doctorName")} labelPosition="left" />
          </Grid>

          {/* Медицинское учреждение */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={8}>
            <Inputs {...tField("hospital")} labelPosition="left" />
          </Grid>

          {/* Корпоративный клиент */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={4}>
            <Inputs
              {...tField("corporate")}
              labelPosition="left"
              type="checkbox"
            />
          </Grid>

          {/* Адрес */}
          <Grid style={{ marginBottom: "0" }} xs={7}>
            <Inputs {...tField("address")} labelPosition="left" />
          </Grid>

          {/* Пол */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={5}>
            <Typography level="body-sm" sx={{ mb: 1 }}>
              {t("passport.fields.gender.label")}
            </Typography>
            <div style={{ display: "flex", gap: "20px" }}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={selectedValue === "male"}
                  onChange={handleGenderChange}
                />{" "}
                {t("passport.fields.gender.male")}
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={selectedValue === "female"}
                  onChange={handleGenderChange}
                />{" "}
                {t("passport.fields.gender.female")}
              </label>
            </div>
          </Grid>

          {/* Телефон */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("phone")} labelPosition="left" />
          </Grid>

          {/* Email */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("email")} labelPosition="left" type="email" />
          </Grid>

          {/* Диагноз */}
          <Grid style={{ marginBottom: "0" }} xs={12}>
            <Inputs {...tField("diagnosis")} labelPosition="left" />
          </Grid>

          {/* Примечание */}
          <Grid style={{ marginBottom: "0" }} xs={12}>
            <Inputs {...tField("note")} labelPosition="left" />
          </Grid>

          {/* Скидка */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              {...tField("discountPercent")}
              labelPosition="left"
              type="number"
            />
          </Grid>
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              {...tField("discountAmount")}
              labelPosition="left"
              type="number"
            />
          </Grid>

          {/* Дисконтная карта */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("card")} labelPosition="left" />
          </Grid>

          {/* ФИО проводившего забор */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs {...tField("collector")} labelPosition="left" />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Кнопки */}
        <div
          style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}
        >
          <Button variant="outlined" color="neutral">
            {t("common.buttons.cancel")}
          </Button>
          <Button type="submit" variant="solid" color="primary">
            {t("common.buttons.save")}
          </Button>
        </div>
      </form>
    </CssVarsProvider>
  );
};
