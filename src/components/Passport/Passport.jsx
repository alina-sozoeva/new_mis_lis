import { useState } from "react";
import { useForm } from "react-hook-form";
import { CssVarsProvider, Typography, Grid, Divider, Button } from "@mui/joy";
import Inputs from "../../components/Editors/inputs.jsx";
import styles from "./Passport.module.scss";

export const Passport = () => {
  const { handleSubmit } = useForm();
  const [selectedValue, setSelectedValue] = useState("male");

  const onSubmit = (data) => console.log(data);

  const handleGenderChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
        <Typography level="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Регистрация
        </Typography>

        <Grid container spacing={2}>
          {/* ИНН */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="ИНН"
              required
              labelPosition="left"
              placeholder="Введите ИНН"
            />
          </Grid>
          {/* ФИО пациента */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="ФИО пациента"
              labelPosition="left"
              placeholder="Фамилия Имя Отчество"
            />
          </Grid>
          {/* Дата рождения */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="Дата рождения"
              labelPosition="left"
              placeholder="ДД.ММ.ГГГГ"
              type="date"
            />
          </Grid>
          {/* ФИО врача */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="ФИО врача"
              labelPosition="left"
              placeholder="Введите ФИО врача"
            />
          </Grid>
          {/* Медицинское учреждение */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={8}>
            <Inputs
              label="Медицинское учреждение"
              labelPosition="left"
              placeholder="Название учреждения"
            />
          </Grid>
          sderdfsxvf
          {/* Адрес */}
          <Grid style={{ marginBottom: "0" }} xs={7}>
            <Inputs
              label="Адрес"
              labelPosition="left"
              placeholder="Введите адрес"
            />
          </Grid>
          {/* Пол */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={5}>
            <Typography level="body-sm" sx={{ mb: 1 }}>
              Пол
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
                Мужской
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={selectedValue === "female"}
                  onChange={handleGenderChange}
                />{" "}
                Женский
              </label>
            </div>
          </Grid>
          {/* Телефон */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="Телефон"
              labelPosition="left"
              placeholder="+996 XXX XX XX XX"
            />
          </Grid>
          {/* Email */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="Email"
              labelPosition="left"
              placeholder="example@mail.com"
              type="email"
            />
          </Grid>
          {/* Диагноз */}
          <Grid style={{ marginBottom: "0" }} xs={12}>
            <Inputs
              label="Диагноз"
              labelPosition="left"
              placeholder="Введите диагноз"
            />
          </Grid>
          {/* Примечание */}
          <Grid style={{ marginBottom: "0" }} xs={12}>
            <Inputs
              label="Примечание регистратора"
              labelPosition="left"
              placeholder="Ваш комментарий..."
            />
          </Grid>
          {/* Скидка */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="Скидка (%)"
              labelPosition="left"
              placeholder="0"
              type="number"
            />
          </Grid>
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="Сумма скидки"
              labelPosition="left"
              placeholder="0"
              type="number"
            />
          </Grid>
          {/* Дисконтная карта */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="Дисконтная карта"
              labelPosition="left"
              placeholder="Номер карты"
            />
          </Grid>
          {/* ФИО проводившего забор */}
          <Grid style={{ marginBottom: "0" }} xs={12} md={6}>
            <Inputs
              label="ФИО проводившего забор"
              labelPosition="left"
              placeholder="Введите ФИО"
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Кнопки */}
        <div
          style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}
        >
          <Button variant="outlined" color="neutral">
            Отмена
          </Button>
          <Button type="submit" variant="solid" color="primary">
            Сохранить
          </Button>
        </div>
      </form>
    </CssVarsProvider>
  );
};
