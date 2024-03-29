import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationPT from './locales/pt/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: true
  }
})

export default i18n