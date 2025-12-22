import 'i18next';
import enUS from '../i18n/locales/en-US.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof enUS;
    };
  }
}
