import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductDisplayPage from '../pages/ProductDisplayPage'

const GuestNavStack = () => {
	return (
		<Routes>
			<Route exact path='/' element={<HomePage />} />
			<Route exact path='/search/*' element={<ProductDisplayPage />} />
			<Route path='/*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default GuestNavStack
