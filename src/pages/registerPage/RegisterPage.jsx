import { Box, Button } from "@mui/material";
import styles from "./RegisterPage.module.scss";
import clsx from "clsx";

export const RegisterPage = () => {
  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={[
          (theme) => ({
            p: 1,
            m: 1,
            bgcolor: "grey.100",
            color: "grey.800",
            border: "1px solid",
            borderColor: "grey.300",
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
            ...theme.applyStyles("dark", {
              bgcolor: "#101010",
              color: "grey.300",
              borderColor: "grey.800",
            }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      />
    );
  }
  return (
    <main>
      <h2 className={clsx(styles.title)}>Регистрация</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Item>Клиент</Item>
        <Item>Профиль</Item>
        <Item>Забор</Item>
        <Item>Анализы</Item>
      </Box>
    </main>
  );
};
