import '../styles/PDPCarousel.css'
const PDPCarousel = () => {
  const data = [

  ]
	return (
		<div className='card-container'>
			<div className='carousel'>
				<div className='carousel-img-main-container'>
					<img className='carousel-img ' src={data[0]} alt='img' />
				</div>
				<div className='carousel-img-folded-container'>
					<img className='carousel-img ' src={data[1]} alt='img' />
				</div>
				<div className='carousel-img-folded-container'>
					<img className='carousel-img ' src={data[2]} alt='img' />
				</div>
				<div className='carousel-img-folded-container'>
					<img className='carousel-img ' src={data[3]} alt='img' />
				</div>
				<div className='carousel-img-folded-container'>
					<img className='carousel-img ' src={data[4]} alt='img' />
				</div>
				<div className='carousel-img-folded-container'>
					<img className='carousel-img ' src={data[5]} alt='img' />
				</div>

			</div>
		</div>
	)
}

export default PDPCarousel
