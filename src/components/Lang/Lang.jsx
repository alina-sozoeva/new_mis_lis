import { Option, Select } from "@mui/joy";
import { useTranslation } from "react-i18next";
import styles from "./Lang.module.scss";
import clsx from "clsx";

const option = [
  { key: "ru", value: "ru", emoji: "🇷🇺" },
  { key: "kg", value: "kg", emoji: "🇰🇬" },
  { key: "en", value: "en", emoji: "🇬🇧" },
  { key: "kz", value: "kz", emoji: "🇰🇿" },
  { key: "tg", value: "tg", emoji: "🇹🇯" },
  { key: "uz", value: "uz", emoji: "🇺🇿" },
  { key: "az", value: "az", emoji: "🇦🇿" },
];

export const Lang = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      defaultValue={i18n.language || "ru"}
      onChange={(event, value) => {
        if (value) {
          i18n.changeLanguage(value);
        }
      }}
    >
      {option.map((item) => (
        <Option
          key={item.key}
          value={item.value}
          className={clsx(styles.lang_op)}
        >
          <span>{item.emoji}</span>
          <span> {item.value.toUpperCase()}</span>
        </Option>
      ))}
    </Select>
  );
};
