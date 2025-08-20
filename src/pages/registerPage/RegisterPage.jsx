import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  Select,
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
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";

export const RegisterPage = () => {
  const { control, handleSubmit } = useForm();
  const [selectedValue, setSelectedValue] = useState("male");
  const [isNavActive, setIsNavActive] = useState("client");

  const onSubmit = (data) => console.log(data);

  const handleGenderChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <main className={clsx(styles.main)}>
      <h2 className={clsx(styles.title)}>Регистрация</h2>
      <Divider />
      <section className={styles.wrap}>
        <section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              m: 0.5,
              bgcolor: "background.paper",
              borderRadius: 1,
              gap: "10px",
            }}
          >
            <span
              className={clsx(
                isNavActive === "client"
                  ? styles.nav_span_active
                  : styles.nav_span
              )}
              onClick={() => setIsNavActive("client")}
            >
              <PersonIcon sx={{ fontSize: 18, mr: 1 }} />
              Клиент
            </span>

            <span
              className={clsx(
                isNavActive === "profile"
                  ? styles.nav_span_active
                  : styles.nav_span
              )}
              onClick={() => setIsNavActive("profile")}
            >
              <AccountCircleIcon sx={{ fontSize: 18, mr: 1 }} />
              Профиль
            </span>

            <span
              className={clsx(
                isNavActive === "zabor"
                  ? styles.nav_span_active
                  : styles.nav_span
              )}
              onClick={() => setIsNavActive("zabor")}
            >
              <BiotechIcon sx={{ fontSize: 18, mr: 1 }} />
              Забор
            </span>

            <span
              className={clsx(
                isNavActive === "analiz"
                  ? styles.nav_span_active
                  : styles.nav_span
              )}
              onClick={() => setIsNavActive("analiz")}
            >
              <ScienceIcon sx={{ fontSize: 18, mr: 1 }} />
              Анализы
            </span>
          </Box>
          <Divider />
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
                    <TextField size="small" />
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
                  <TextField size="small" />
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
                    <TextField size="small" />
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
                  <TextField size="small" />
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
                      <Select
                        size="small"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
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
                  <TextField size="small" />
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
                  <TextField size="small" />
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
                    <TextField size="small" />
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

                  <TextField multiline rows={1} variant="outlined" />
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
                  <TextField multiline rows={2} variant="outlined" />
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
                      gridTemplateColumns: "3fr 1fr 1fr",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <FormControl fullWidth>
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
                      <TextField size="small" style={{ width: "100%" }} />
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
                  <label>ФИО проводившего забор</label>
                  <TextField size="small" />
                </Box>
              )}
            />
          </form>
        </section>
        <section>
          <Box
            sx={(theme) => ({
              position: "fixed",
              right: 0,
              top: "40px",
              height: "calc(100vh - 40px)",
              width: 250,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              zIndex: 1200,
            })}
          >
            <Box
              sx={(theme) => ({
                flex: 1,
                borderRadius: 2,
                p: 2,
                boxShadow: theme.shadows[3],
                display: "flex",
                flexDirection: "column",
              })}
            >
              <h2 className={clsx(styles.title)}>Вакутейнеры</h2>
            </Box>

            <Box
              sx={(theme) => ({
                flex: 1,
                borderRadius: 2,
                p: 2,
                boxShadow: theme.shadows[3],
                display: "flex",
                flexDirection: "column",
              })}
            >
              <h2 className={clsx(styles.title)}>Выбранные анализы</h2>
            </Box>
          </Box>
        </section>
      </section>
    </main>
  );
};
