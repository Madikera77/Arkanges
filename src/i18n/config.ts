import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import frCA from './locales/fr-CA.json'
import enUS from './locales/en-US.json'
import ht from './locales/ht.json'
import esES from './locales/es-ES.json'

// Langues disponibles dans l'application
const availableLanguages = ['fr-CA', 'en-US', 'ht', 'es-ES']

// Fonction de fallback personnalisée
const getFallbackLanguage = (lng: string | string[]): string[] => {
  // Si c'est un tableau, prendre la première langue
  const language = Array.isArray(lng) ? lng[0] : lng
  
  // Si la langue est déjà disponible, la retourner
  if (availableLanguages.includes(language)) {
    return [language]
  }
  
  // Extraire le code de langue de base (ex: 'fr' de 'fr-FR')
  const baseLanguage = language.split('-')[0].toLowerCase()
  
  // Mapping des langues de base vers les langues disponibles
  const languageMap: Record<string, string> = {
    'fr': 'fr-CA',      // fr-FR, fr-BE, fr-CH, etc. → fr-CA
    'en': 'en-US',      // en-CA, en-UK, en-GB, en-AU, etc. → en-US
    'es': 'es-ES',      // es-MX, es-AR, es-CO, etc. → es-ES
    'ht': 'ht',         // ht-HT → ht
  }
  
  // Si on a un mapping pour la langue de base, l'utiliser
  if (languageMap[baseLanguage]) {
    return [languageMap[baseLanguage], 'fr-CA']
  }
  
  // Sinon, fallback vers fr-CA
  return ['fr-CA']
}

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
    fallbackLng: getFallbackLanguage,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      // Convertit la langue détectée vers une langue disponible
      convertDetectedLanguage: (lng: string): string => {
        // Si la langue est déjà disponible, la retourner
        if (availableLanguages.includes(lng)) {
          return lng
        }
        
        // Extraire le code de langue de base
        const baseLanguage = lng.split('-')[0].toLowerCase()
        
        // Mapping des langues de base vers les langues disponibles
        const languageMap: Record<string, string> = {
          'fr': 'fr-CA',
          'en': 'en-US',
          'es': 'es-ES',
          'ht': 'ht',
        }
        
        // Retourner la langue mappée ou fr-CA par défaut
        return languageMap[baseLanguage] || 'fr-CA'
      },
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
