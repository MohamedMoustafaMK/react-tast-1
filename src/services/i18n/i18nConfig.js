// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './translations/enTranslation.json'
import arTranslations from './translations/arTranslation.json'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enTranslations,
		},
		ar: {
			translation: arTranslations,
		},
	},
	fallbackLng: 'en',
	lng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
