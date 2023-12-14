import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./jazyky/en.json";
import czTranslations from "./jazyky/cz.json";

// Translations
const resources = {
  en: { translation: enTranslations },
  cz: { translation: czTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
