import { useState } from 'react'
import { Img } from 'react-image'
import '../styles/ProductDetailsPage.css'
import Spinner from './shared/Spinner'

const PDPCarousel = ({ data }) => {
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
					{data.cover_image_path && (
						<Img
							className='carousel-img'
							src={data.cover_image_path}
							alt='img'
							loader={<Spinner />}
						/>
					)}
				</div>
				{data.compound_images &&
					data.compound_images.length >= 6 &&
					data.compound_images.slice(1, 7).map(
						(imgSrc, index) =>
							imgSrc.image_path && (
								<div
									key={index}
									className={`carousel-img-container ${
										isHovered === index + 1
											? 'carousel-img-main-container'
											: 'carousel-img-folded-container'
									}`}
									onMouseEnter={() =>
										handleHover(index + 1, false)
									}
									onMouseLeave={() => handleHover(null, true)}
								>
									<Img
										className='carousel-img'
										src={imgSrc.image_path}
										alt={`img-${index + 1}`}
										loader={<Spinner />}
									/>
								</div>
							),
					)}
				<div className='carousel-img-static-container'>
					{data.compound_images && (
						<Img
							className='static-img'
							src={data.compound_images[1].image_path}
							alt={`img`}
							loader={<Spinner />}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default PDPCarousel
