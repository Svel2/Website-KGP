import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import idNavigation from '../locales/id/navigation.json';
import idServices from '../locales/id/services.json';
import idHomepage from '../locales/id/homepage.json';
import idCommon from '../locales/id/common.json';
import idAbout from '../locales/id/about.json';
import idContact from '../locales/id/contact.json';
import idFooter from '../locales/id/footer.json';
import idProductServices from '../locales/id/productServices.json';

import enNavigation from '../locales/en/navigation.json';
import enServices from '../locales/en/services.json';
import enHomepage from '../locales/en/homepage.json';
import enCommon from '../locales/en/common.json';
import enAbout from '../locales/en/about.json';
import enContact from '../locales/en/contact.json';
import enFooter from '../locales/en/footer.json';
import enProductServices from '../locales/en/productServices.json';

// Daftar namespace yang digunakan
const namespaces = [
  'common',
  'navigation',
  'services',
  'homepage',
  'about',
  'contact',
  'footer',
  'productServices',
];

const resources = {
  id: {
    navigation: idNavigation,
    services: idServices,
    homepage: idHomepage,
    common: idCommon,
    about: idAbout,
    contact: idContact,
    footer: idFooter,
    productServices: idProductServices,
  },
  en: {
    navigation: enNavigation,
    services: enServices,
    homepage: enHomepage,
    common: enCommon,
    about: enAbout,
    contact: enContact,
    footer: enFooter,
    productServices: enProductServices,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'id' : 'id', // Check localStorage first
    fallbackLng: 'id', // Fallback language: Indonesian
    debug: false, // Set to true for development debugging

    interpolation: {
      escapeValue: false, // React already escapes by default
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language', // Explicitly set localStorage key
    },

    ns: namespaces,
    defaultNS: 'common',
  });

export default i18n;