import PDPCardRibbon from '../components/PDPCardRibbon'
import PDPCarousel from '../components/PDPCarousel'
import NavigationRibbon from '../components/NavigationRibbon'
import GalleryModal from '../components/GalleryModal'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
	const [fetchedData, setFetchedData] = useState({})
	const { compoundId } = useParams()
	const baseUrl = 'https://webapi.cooingestate.com/api/compounds/'
	//data.cover-image-path
	//data.compound_images.image_path
	const fetchData = async () => {
		const { data } = await axios.get(
			`${baseUrl}${compoundId}?token=undefined&language=en`,
		)
		console.log(data)
		setFetchedData(data)
	}
	useEffect(() => {
		fetchData()
	}, [compoundId])
	return (
		<div className='page-container'>
			<NavigationRibbon />
			{fetchedData && <PDPCarousel data={fetchedData} />}
			<PDPCardRibbon />
			{fetchedData && <GalleryModal data={fetchedData.compound_images} />}
		</div>
	)
}

export default ProductDetailsPage
