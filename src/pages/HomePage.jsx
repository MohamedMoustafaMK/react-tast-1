// HomePage.js
import React from 'react'
import SearchCard from '../components/SearchCard'
import { useSelector } from 'react-redux'
import { languageSelector } from '../services/state/redux/app/appSlice'
import { useTranslation } from 'react-i18next'
import staticData from '../util/staticData'

const HomePage = () => {
	const language = useSelector(languageSelector)
	const { t } = useTranslation()

	return (
		<div>
			<SearchCard language={language} t={t} dropdownItems={staticData} />
		</div>
	)
}

export default HomePage
