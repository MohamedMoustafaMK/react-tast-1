import PDPCardRibbon from '../components/PDPCardRibbon'
import PDPCarousel from '../components/PDPCarousel'

const ProductDetailsPage = () => {
	const data = [
		'https://via.placeholder.com/800x600/FF5733/FFFFFF?text=1',
		'https://via.placeholder.com/800x600/33FF57/FFFFFF?text=2',
		'https://via.placeholder.com/800x600/5733FF/FFFFFF?text=3',
		'https://via.placeholder.com/800x600/FF3366/FFFFFF?text=4',
		'https://via.placeholder.com/800x600/33A1FF/FFFFFF?text=5',
		'https://via.placeholder.com/800x600/FF33A1/FFFFFF?text=6',
		'https://via.placeholder.com/800x600/AA11A1/FFFFFF?text=7',
	]

	return (
		<div className='page-container'>
			<PDPCarousel data={data} />
			<PDPCardRibbon />
		</div>
	)
}

export default ProductDetailsPage
