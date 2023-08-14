import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "@public/locale/en/common.json";
import ES from "@public/locale/es/common.json";

export const resources = {
  en: { translation: EN },
  es: { translation: ES },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: ["es", "en"],
  resources,
});

export default i18n;
