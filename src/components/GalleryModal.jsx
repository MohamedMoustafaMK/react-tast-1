import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/ProductDetailsPage.css'
import { Img } from 'react-image'
import Spinner from './shared/Spinner'

const YourComponent = ({ data, language }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [imgIndex, setImgIndex] = useState(0)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setImgIndex(0)
	}

	const handleImageNext = () => {
		setImgIndex(imgIndex + 1)
		if (imgIndex === data.length - 1) {
			setImgIndex(0)
		}
	}
	const handleImagePrev = () => {
		setImgIndex(imgIndex - 1)
		if (imgIndex === 0) {
			setImgIndex(data.length - 1)
		}
	}

	return (
		<div>
			<button onClick={openModal}>Open Modal</button>

			<div
				className={`modal-overlay ${isModalOpen ? 'modal-open' : 'modal-close'}`}
				onClick={closeModal}
			>
				<div
					className={`modal ${language === 'ar' ? 'ar' : 'en'}`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className='modal-close-btn-container'>
						<IoIosClose onClick={closeModal} size={50} />
					</div>
					{data && data.length > 0 && (
						<div className='modal-content-container'>
							<Img
								className='modal-img'
								src={data[imgIndex].image_path}
								alt='Description of the image'
								loader={<Spinner />}
							/>
							<div className='overlay-gallery-btns'>
								<div
									className='gallery-btn'
									onClick={handleImagePrev}
								>
									<FaArrowLeft />
								</div>
								<div
									className='gallery-btn'
									onClick={handleImageNext}
								>
									<FaArrowRight />
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default YourComponent
