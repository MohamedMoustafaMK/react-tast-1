import PDPCardRibbon from '../components/PDPCardRibbon'
import PDPCarousel from '../components/PDPCarousel'
import NavigationRibbon from '../components/NavigationRibbon'
import GalleryModal from '../components/GalleryModal'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ProductDetailsPage = () => {
	const [fetchedData, setFetchedData] = useState({})
	const baseUrl = 'https://webapi.cooingestate.com/api/compounds/'
	//data.cover-image-path
	//data.compound_images.image_path
	const fetchData = async (compound_id) => {
		const { data } = await axios.get(
			`${baseUrl}${compound_id}?token=undefined&language=en`,
		)
		console.log(data)
		setFetchedData(data)
	}
	useEffect(() => {
		fetchData(530)
	}, [])
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
