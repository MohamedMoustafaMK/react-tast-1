import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductListingPage from '../pages/ProductListingPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'

const GuestNavStack = () => {
	return (
		<Routes>
			<Route exact path='/' element={<HomePage />} />
			<Route exact path='/search/*' element={<ProductListingPage />} />
			<Route exact path='/compound/:compoundId' element={<ProductDetailsPage />} />
			<Route path='/*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default GuestNavStack
