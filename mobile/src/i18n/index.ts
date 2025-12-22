import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { Storage } from "expo-sqlite/kv-store";
import { format, Locale } from 'date-fns';

// Import translation files
import enGB_translate from './locales/en-GB.json';
import enUS_translate from './locales/en-US.json';
import de_translate from './locales/de.json';
import ja_translate from './locales/ja.json';
import ko_translate from './locales/ko.json';
import ru_translate from './locales/ru.json';
import zhCN_translate from './locales/zh-CN.json';
import zhTW_translate from './locales/zh-TW.json';


// Import date-fns locales
import { de, enGB, enUS, ja, ko, ru, zhCN, zhHK, zhTW } from 'date-fns/locale';
import { ResourceLanguage } from 'i18next';


// https://en.wikipedia.org/wiki/IETF_language_tag
type LanguageTag = string

interface TranslateResource extends ResourceLanguage {
  datefnsLocale: Locale;
}

const LANGUAGE_KEY = 'vrcp_user_language';
const defaultLang = "en-US";
export const translateResources: { [key: LanguageTag]: TranslateResource } = {
  "en-GB": { translation: enGB_translate, datefnsLocale: enGB },
  "en-US": { translation: enUS_translate, datefnsLocale: enUS },
  "de": { translation: de_translate, datefnsLocale: de },
  "ja": { translation: ja_translate, datefnsLocale: ja },
  "ko": { translation: ko_translate, datefnsLocale: ko },
  "ru": { translation: ru_translate, datefnsLocale: ru },
  "zh-CN": { translation: zhCN_translate, datefnsLocale: zhCN },
  "zh-TW": { translation: zhTW_translate, datefnsLocale: zhTW },
};


export const setUserLanguage = async (lang: LanguageTag) => {
  await Storage.setItemAsync(LANGUAGE_KEY, lang);
  await i18n.changeLanguage(lang);
}
export const getUserLanguage = async (): Promise<LanguageTag> => {
  return i18n.language
}
const initUserLanguage = async (): Promise<LanguageTag> => {
  const storedLang = await Storage.getItemAsync(LANGUAGE_KEY);
  const deviceLang = Localization.getLocales()[0]?.languageTag;
  return storedLang || deviceLang || defaultLang;
}


const initI18n = async () => {
  const userLang = await initUserLanguage();

  i18n
    .use(initReactI18next)
    .init({
      resources: translateResources,
      lng: userLang, // 初期言語
      fallbackLng: defaultLang,  // 対応していない言語の場合のフォールバック
      interpolation: {
        escapeValue: false,
        format: (value, formatStr, lng) => {
          if (value instanceof Date && formatStr) {
            const locale = translateResources[lng || defaultLang].datefnsLocale;
            return format(value, formatStr, { locale });
          }
          return value;
        },
      },
      compatibilityJSON: 'v4',
    });
};

initI18n();

export default i18n;
