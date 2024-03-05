import PDPCardRibbon from '../components/PDPCardRibbon'
import PDPCarousel from '../components/PDPCarousel'
import NavigationRibbon from '../components/NavigationRibbon'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ProductDetailsPage = () => {
	const [fetchedData, setFetchedData] = useState({})
	const baseUrl = 'https://webapi.cooingestate.com/api/compounds/'
	//data.cover-image-path
	//data.compound_images.image-path
	const fetchData = async (compound_id) => {
		const { data } = await axios.get(
			`${baseUrl}${compound_id}?token=undefined&language=en`,
		)
		console.log(data)
		setFetchedData(data)
	}
	useEffect(() => {
		fetchData(202)
	}, [])
	return (
		<div className='page-container'>
			<NavigationRibbon />
			{fetchData && <PDPCarousel data={fetchedData} />}
			<PDPCardRibbon />
		</div>
	)
}

export default ProductDetailsPage
