import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import styles from "./RegisterPage.module.scss";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const RegisterPage = () => {
  const { control, handleSubmit } = useForm();
  const [selectedValue, setSelectedValue] = useState("male");

  const onSubmit = (data) => console.log(data);

  const handleGenderChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
            <Box className={clsx(styles.input)}>
              <label>ИНН</label>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "12fr 1fr",
                  gap: "10px",
                }}
              >
                <TextField size="small" label="Введите ИНН" />
                <FormControlLabel control={<Checkbox />} label="Резидент" />
              </Box>
            </Box>
          )}
        />
        <Controller
          name="patientFullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>ФИО пациента</label>
              <TextField size="small" label="Введите ФИО пациента" />
            </Box>
          )}
        />
        <Controller
          name="birthDate"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Дата рождения</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Введите дату рождения"
                  slotProps={{
                    textField: {
                      size: "small",
                      inputProps: { style: { fontSize: 12 } },
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
          )}
        />
        <Controller
          name="doctorFullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>ФИО врача</label>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "0.3fr 12fr 1fr",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Checkbox defaultChecked />
                <TextField size="small" label="Введите ФИО врача" />
                <SearchIcon />
              </Box>
            </Box>
          )}
        />
        <Controller
          name="medicalInstitution"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Медицинское учреждение</label>
              <TextField
                size="small"
                label="Введите наименование медицинского учреждения"
              />
            </Box>
          )}
        />
        <Controller
          name="corporateClient"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Корпоративный клиент</label>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "0.3fr 12fr ",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Checkbox />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Выберите корпоративного клиента
                  </InputLabel>
                  <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Выберите корпоративного клиента"
                    // onChange={handleChange}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root": {
                            fontSize: 12,
                            minHeight: 28,
                            py: 0.5,
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          )}
        />
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Пол</label>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Мужской"
                  checked={selectedValue === "male"}
                  onChange={handleGenderChange}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Женский"
                  checked={selectedValue === "female"}
                  onChange={handleGenderChange}
                />
              </Box>
            </Box>
          )}
        />
        <Controller
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Адрес</label>
              <TextField size="small" label="Введите адрес" />
            </Box>
          )}
        />
        <Controller
          name="workOrStudy"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Работа/учёба</label>
              <TextField size="small" label="Введите место работы/учёбы" />
            </Box>
          )}
        />
        <Controller
          name="additionalDetails"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Телефон</label>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Checkbox />
                  <TextField size="small" style={{ width: "100%" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Checkbox />
                  <TextField size="small" style={{ width: "100%" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Checkbox />
                  <TextField size="small" style={{ width: "100%" }} />
                </Box>
              </Box>
            </Box>
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Email</label>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <TextField size="small" label="Введите email" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Наличие симптомов"
                />
              </Box>
            </Box>
          )}
        />
        <Controller
          name="diagnosis"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Диагноз</label>
              <TextareaAutosize
                className={styles.textarea}
                aria-label="minimum height"
                minRows={2}
                placeholder="Введите диагноз"
              />
            </Box>
          )}
        />
        <Controller
          name="registrarNote"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Примечание регистратора</label>
              <TextareaAutosize
                className={styles.textarea}
                aria-label="minimum height"
                minRows={4}
                placeholder="Введите примечание"
              />
            </Box>
          )}
        />
        <Controller
          name="discount"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Скидка</label>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "4fr 1fr 1fr",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Скидка</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Скидка"
                    // onChange={handleChange}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root": {
                            fontSize: 12,
                            minHeight: 28,
                            py: 0.5,
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    gap: "5px",
                  }}
                >
                  <label>Процент</label>
                  <TextField size="small" defaultValue={0} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <label>Сумма</label>
                  <TextField size="small" defaultValue={0} />
                </Box>
              </Box>
            </Box>
          )}
        />
        <Controller
          name="discountCard"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>Дисконтная карта</label>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "4fr  1fr",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <TextField
                    size="small"
                    style={{ width: "100%" }}
                    label="Введите дисконтную карту"
                  />
                  <SearchIcon />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <label>Баланс</label>
                  <TextField size="small" defaultValue={0} />
                </Box>
              </Box>
            </Box>
          )}
        />
        <Controller
          name="collectorFullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Box className={clsx(styles.input)}>
              <label>ФИО специалиста, проводившего забор</label>
              <TextField
                size="small"
                label="Введите ФИО специалиста, проводившего забор"
              />
            </Box>
          )}
        />
      </form>
    </main>
  );
};
