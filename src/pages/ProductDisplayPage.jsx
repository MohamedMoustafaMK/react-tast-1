import ProductDisplayList from '../components/ProductDisplayList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { languageSelector } from '../services/state/redux/app/appSlice'
import { useTranslation } from 'react-i18next'

const ProductDisplayPage = () => {
	const [fetchedData, setFetchedData] = useState([])
	const language = useSelector(languageSelector)
	const { t } = useTranslation()

	const baseUrl = 'https://webapi.cooingestate.com'
	const endpoint = '/api/properties/search'
	const fetchData = async () => {
		try {
			const params = {
				token: undefined,
				language: language,
			}
			const headers = {
				'Content-Type': 'application/json',
			}
			const payload = {
				show: 'compound',
				start: 1,
			}
			const { data } = await axios.post(
				`${baseUrl}${endpoint}`,
				payload,
				{ headers, params },
			)
			console.log('🚀 ~ fetchData ~ data.values:', data.values)
			setFetchedData(data)
		} catch (error) {
			console.log('🚀 ~ fetchData ~ error:', error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [language])

	return (
		<div>
			<ProductDisplayList data={fetchedData} language={language} t={t} />
		</div>
	)
}

export default ProductDisplayPage
