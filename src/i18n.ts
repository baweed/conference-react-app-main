import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.json';
import en from './locales/en.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'ru', // TODO: Поменять на англ
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {translation: ru},
      en: {translation: en}
    },
  });