import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductListingPage from '../pages/ProductListingPage'

const GuestNavStack = () => {
	return (
		<Routes>
			<Route exact path='/' element={<HomePage />} />
			<Route exact path='/search/*' element={<ProductListingPage />} />
			<Route path='/*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default GuestNavStack
