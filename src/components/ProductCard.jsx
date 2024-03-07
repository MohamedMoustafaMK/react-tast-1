import '../styles/ProductCard.css'
import { Fragment } from 'react'
import { formatNumberWithCommas } from '../util/formatting'
import { RiShareBoxFill } from 'react-icons/ri'
import { FaRegHeart, FaWhatsapp } from 'react-icons/fa'
import { BsHouses } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ data, language, t }) => {
  const navigate = useNavigate()
	const handleCardClick = (compoundId) => {
		console.log(compoundId)
    navigate(`/compound/${compoundId}`)

	}
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
							<div
								className='image-btn'
								onClick={() => console.log('House')}
							>
								<BsHouses size={20} />
							</div>
							<div
								className='image-btn'
								onClick={() => console.log('Share')}
							>
								<RiShareBoxFill size={20} />
							</div>
							<div
								className='image-btn'
								onClick={() => console.log('Fav')}
							>
								<FaRegHeart size={20} />
							</div>
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
							<div
								className='contact-btn phone'
								onClick={() => console.log('phone')}
							>
								<FaPhone size={20} />
							</div>
							<div
								className='contact-btn whatsap'
								onClick={() => console.log('whatsap')}
							>
								<FaWhatsapp size={30} />
							</div>
						</div>
						<div
							className='card-clickable'
							onClick={() => handleCardClick(item.id)}
						></div>
					</div>
				))}
		</div>
	)
}

export default ProductCard
