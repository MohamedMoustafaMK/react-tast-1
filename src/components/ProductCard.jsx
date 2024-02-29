import '../styles/ProductCard.css'
import { Fragment } from 'react'
import { formatNumberWithCommas } from '../util/formatting'

const ProductCard = ({ data, language, t }) => {
	return (
		<div className='product-card-container'>
			{data.values.length > 0 &&
				data.values.map((item, index) => (
					<div className='product-card' key={index}>
						<div className='background-image-container'>
							<img
								className='product-card-image'
								src={item.image}
								alt='image'
							/>
						</div>
						<img
							className='product-card-logo'
							src={item.developer.logo_path}
							alt='logo'
						></img>
						<div className='image-btns'>
							<div className='image-btn'>1</div>
							<div className='image-btn'>2</div>
							<div className='image-btn'>3</div>
						</div>
						<div className='card-desc'>
							<div className='prduct-card-title'>{item.name}</div>
							<div className='address'>
								{`${item.area.name}, ${t('pdp_product-card-eg')}`}
							</div>
							{item.property_types && (
								<div className='property-types'>
									{item.property_types_count
										.slice(0, 3)
										.map((property_type, index) => (
											<Fragment key={index}>
												{`${property_type.count} ${property_type.name} | `}
											</Fragment>
										))}
									{item.property_types_count.length > 3 && (
										<>
											{`${
												item.property_types_count
													.length - 3
											} ${t('pdp_product-card-more')}`}
										</>
									)}
								</div>
							)}
							<div className='price-installment'>
								{`${formatNumberWithCommas(item.min_down_payment)} ${t('pdp_product-card-down_payment')}/${item.max_installment_years} ${t('pdp_product-card-years')}`}
							</div>
							<div className='price-cash'>
								{`${formatNumberWithCommas(item.min_price)} ${item.currency}`}
							</div>
						</div>
						<div className='product-card-contact-btns'>
							<div className='contact-btn'>4</div>
							<div className='contact-btn'>5</div>
						</div>
					</div>
				))}
		</div>
	)
}

export default ProductCard
