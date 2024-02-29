import ProductCard from './ProductCard'
import Pagination from './shared/Pagination'
import '../styles/ProductDisplayList.css'
import ProductCardSkeleton from './ProductCardSkeleton'

const ProductDisplayList = ({ data, language, t, isLoading }) => {
	return (
		<div className='product-list'>
			{isLoading ? (
				<ProductCardSkeleton />
			) : (
				<>
					<h2>{data.total_compounds}</h2>
					<ProductCard data={data} language={language} t={t} />
				</>
			)}
		</div>
	)
}

export default ProductDisplayList
