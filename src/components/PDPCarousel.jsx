import { useState } from 'react'
import '../styles/PDPCarousel.css'

const PDPCarousel = () => {
	const [isHovered, setIsHovered] = useState(null)
	const [isMain, setIsMain] = useState(true)

	const data = [
		'https://via.placeholder.com/800x600/FF5733/FFFFFF?text=1',
		'https://via.placeholder.com/800x600/33FF57/FFFFFF?text=2',
		'https://via.placeholder.com/800x600/5733FF/FFFFFF?text=3',
		'https://via.placeholder.com/800x600/FF3366/FFFFFF?text=4',
		'https://via.placeholder.com/800x600/33A1FF/FFFFFF?text=5',
		'https://via.placeholder.com/800x600/FF33A1/FFFFFF?text=6',
	]

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
				<div className='carousel-img-folded-container'>
					<img
						className='carousel-img'
						src='https://via.placeholder.com/800x600/AA11A1/FFFFFF?text=7'
						alt='img'
					/>
				</div>
			</div>
		</div>
	)
}

export default PDPCarousel
