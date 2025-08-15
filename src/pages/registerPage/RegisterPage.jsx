import { Box, Button, Input, TextField, Typography } from "@mui/material";
import styles from "./RegisterPage.module.scss";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";

export const RegisterPage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <main className={clsx(styles.main)}>
      <h2 className={clsx(styles.title)}>Регистрация</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          gap: "10px",
        }}
      >
        <Button variant="contained">Клиент</Button>
        <Button variant="contained">Профиль</Button>
        <Button variant="contained">Забор</Button>
        <Button variant="contained">Анализы</Button>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.form)}>
        <Controller
          name="inn"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1">ИНН</Typography>
              <TextField label="Введите ИНН" />
            </Box>
          )}
        />
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1">ФИО пациента</Typography>
              <TextField label="Введите ФИО пациента" />
            </Box>
          )}
        />
      </form>
    </main>
  );
};
