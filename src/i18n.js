import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru.json";
import en from "./locales/en.json";
import kg from "./locales/kg.json";
import kz from "./locales/kz.json";
import tg from "./locales/tg.json";
import uz from "./locales/uz.json";
import az from "./locales/az.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    kg: { translation: kg },
    kz: { translation: kz },
    tg: { translation: tg },
    uz: { translation: uz },
    az: { translation: az },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
