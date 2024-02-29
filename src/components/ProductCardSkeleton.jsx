// ProductCardSkeleton.jsx
import React from 'react'
import '../styles/ProductCardSkeleton.css'

const ProductCardSkeleton = () => {
	const renderSkeletons = (count) => {
		const skeletons = []
		for (let i = 0; i < count; i++) {
			skeletons.push(
				<div key={i} className='product-card skeleton'>
					<div className='background-skeleton-container'></div>
					<div className='card-desc'>
						<div className='product-card-title skeleton'></div>
						<div className='address skeleton'></div>
						<div className='price-installment skeleton'></div>
						<div className='property-types skeleton'></div>
					</div>
				</div>,
			)
		}
		return skeletons
	}

	return (
		<div className='product-card-skeleton-wrapper'>
			{renderSkeletons(12)}
		</div>
	)
}

export default ProductCardSkeleton
