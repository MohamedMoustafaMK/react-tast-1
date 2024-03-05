import ProductCard from './ProductCard'
import '../styles/ProductDisplayList.css'
import ProductCardSkeleton from './ProductCardSkeleton'

const ProductDisplayList = ({ data, language, t, isLoading }) => {
	return (
		<div>
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
