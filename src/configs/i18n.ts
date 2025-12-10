import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { Storage } from "expo-sqlite/kv-store";

// 翻訳ファイルをインポート
import ja from './locales/ja.json';
import en from './locales/en.json';

const RESOURCES = {
  ja: { translation: ja },
  en: { translation: en },
};

const LANGUAGE_KEY = 'vrcp_user_language';

const initI18n = async () => {
  let savedLanguage = await Storage.getItemAsync(LANGUAGE_KEY);

  if (!savedLanguage) {
    // 端末の言語設定を取得 (例: "ja-JP" -> "ja")
    const deviceLanguage = Localization.getLocales()[0]?.languageCode;
    savedLanguage = deviceLanguage === 'ja' ? 'ja' : 'en'; // 日本語以外は英語にする
  }

  i18n
    .use(initReactI18next)
    .init({
      resources: RESOURCES,
      lng: savedLanguage, // 初期言語
      fallbackLng: 'ja',  // 対応していない言語の場合のフォールバック
      interpolation: {
        escapeValue: false,
      },
      compatibilityJSON: 'v4', // Androidでのクラッシュ回避用
    });
};

initI18n();

export default i18n;