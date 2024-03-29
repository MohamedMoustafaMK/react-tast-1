import PDPCardRibbon from '../components/PDPCardRibbon'
import PDPCarousel from '../components/PDPCarousel'
import NavigationRibbon from '../components/NavigationRibbon'
import GalleryModal from '../components/GalleryModal'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { languageSelector } from '../services/state/redux/app/appSlice'
import Spinner from '../components/shared/Spinner'

const ProductDetailsPage = () => {
	const [fetchedData, setFetchedData] = useState()
	const [loader, setLoader] = useState(true)
	const { compoundId } = useParams()
	const language = useSelector(languageSelector)
	const { t } = useTranslation()
	const baseUrl = 'https://webapi.cooingestate.com/api/compounds/'
	//data.cover-image-path
	//data.compound_images.image_path
	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				`${baseUrl}${compoundId}?token=undefined&language=${language}`,
			)
			console.log(data)
			setFetchedData(data)
		} catch (error) {
			console.log('🚀 ~ fetchData ~ error:', error)
		} finally {
			setLoader(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [compoundId, language])

	return (
		<div className='page-container'>
			{!loader ? (
				<>
					<NavigationRibbon />
					{fetchedData && (
						<PDPCarousel
							data={fetchedData}
							language={language}
							t={t}
						/>
					)}
					{fetchedData && (
						<PDPCardRibbon
							data={fetchedData}
							language={language}
							t={t}
						/>
					)}
					{fetchedData && (
						<GalleryModal
							data={fetchedData.compound_images}
							language={language}
							t={t}
						/>
					)}
				</>
			) : (
				<div className='loader-container'>
					<Spinner />
				</div>
			)}
		</div>
	)
}

export default ProductDetailsPage
