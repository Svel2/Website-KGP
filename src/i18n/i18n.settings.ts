// i18n.settings.ts
export const languages = ['id', 'en'] as const;
export const defaultLocale = 'id';
export const fallbackLng = 'id';

// Mapping bahasa untuk tampilan
export const languageNames: { [key: string]: string } = {
  id: 'Indonesia',
  en: 'English',
};

// Daftar namespace yang digunakan
export const namespaces = [
  'common',
  'navigation',
  'services',
  'homepage',
  'about',
  'contact',
  'footer',
  'productServices',
] as const;