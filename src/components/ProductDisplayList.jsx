import ProductCard from './ProductCard'
import Pagination from './shared/Pagination'
import '../styles/ProductDisplayList.css'

const ProductDisplayList = ({ data, language, t }) => {
	return (
		<div className='product-list'>
			<ProductCard data={data} language={language} t={t} />
			<Pagination />
		</div>
	)
}

export default ProductDisplayList
