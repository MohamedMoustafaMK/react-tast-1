import { useState } from 'react'
import '../styles/ProductDetailsPage.css'

const PDPCarousel = ({data}) => {
	const [isHovered, setIsHovered] = useState(null)
	const [isMain, setIsMain] = useState(true)

	
	const handleHover = (index, isMain) => {
		setIsHovered(index)
		setIsMain(isMain)
	}

	return (
		<div className='card-container'>
			<div className='carousel'>
				<div
					className={`carousel-img-container ${
						isMain
							? 'carousel-img-main-container'
							: 'carousel-img-folded-container'
					}`}
				>
					<img className='carousel-img' src={data[0]} alt='img' />
				</div>
				{data.slice(1, 6).map((imgSrc, index) => (
					<div
						key={index}
						className={`carousel-img-container ${
							isHovered === index + 1
								? 'carousel-img-main-container'
								: 'carousel-img-folded-container'
						}`}
						onMouseEnter={() => handleHover(index + 1, false)}
						onMouseLeave={() => handleHover(null, true)}
					>
						<img
							className='carousel-img'
							src={imgSrc}
							alt={`img-${index + 1}`}
						/>
					</div>
				))}
				<div className='carousel-img-static-container'>
					<img className='static-img' src={data[6]} alt='img' />
				</div>
			</div>
		</div>
	)
}

export default PDPCarousel
