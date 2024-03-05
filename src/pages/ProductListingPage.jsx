import ProductDisplayList from '../components/ProductDisplayList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { languageSelector } from '../services/state/redux/app/appSlice'
import { useTranslation } from 'react-i18next'
import Pagination from '../components/shared/Pagination'

const ProductListingPage = () => {
	const [fetchedData, setFetchedData] = useState([])
	const [isLoading, setisLoading] = useState(false)
	const language = useSelector(languageSelector)
	const { t } = useTranslation()

	const baseUrl = 'https://webapi.cooingestate.com'
	const endpoint = '/api/properties/search'
	const fetchData = async () => {
		setisLoading(true)
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
			console.log('🚀 ~ fetchData ~ data:', data)
			setFetchedData(data)
		} catch (error) {
			console.log('🚀 ~ fetchData ~ error:', error)
		} finally {
			setisLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [language])

	return (
		<div className='page-container'>
			<ProductDisplayList
				data={fetchedData}
				language={language}
				t={t}
				isLoading={isLoading}
			/>
			<Pagination
				dataCount={fetchedData.total_compounds}
				data={fetchedData.values}
			/>
		</div>
	)
}

export default ProductListingPage
