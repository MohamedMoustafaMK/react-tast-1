import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './services/state/redux/store.js'
import { I18nextProvider } from 'react-i18next'
import i18n from './services/i18n/i18nConfig.js'
import DirectionWrapper from './services/i18n/DirectionWrapper'

const root = createRoot(document.getElementById('root'))

root.render(
	<Provider store={store}>
		<Router>
			<I18nextProvider i18n={i18n}>
				<DirectionWrapper />
			</I18nextProvider>
		</Router>
	</Provider>,
)
