import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import frCA from './locales/fr-CA.json'
import enUS from './locales/en-US.json'
import ht from './locales/ht.json'
import esES from './locales/es-ES.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'fr-CA': { translation: frCA },
      'en-US': { translation: enUS },
      'ht': { translation: ht },
      'es-ES': { translation: esES },
    },
    fallbackLng: 'fr-CA',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
