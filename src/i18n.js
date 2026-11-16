import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/EN.json";
import ar from "./locales/AR.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },

  lng: localStorage.getItem("language") || "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

// تغيير اتجاه الصفحة حسب اللغة
const setDirection = (language) => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
};

// ضبط الاتجاه عند تشغيل الموقع
setDirection(i18n.language);

// ضبط الاتجاه عند تغيير اللغة
i18n.on("languageChanged", (language) => {
  setDirection(language);
});

export default i18n;
