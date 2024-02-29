import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ dataCount, data }) => {
	const itemsPerPage = 10 // Number of items to display per page
	const pageCount = Math.ceil(dataCount / itemsPerPage)

	const handlePageChange = (selectedPage) => {
		// Calculate the index range for the current page
		const startIndex = selectedPage * itemsPerPage
		const endIndex = startIndex + itemsPerPage
		// Display data within the range
		const currentData = data.slice(startIndex, endIndex)
		// Update your component state with the current data
		// or trigger a data fetch from an API
	}
	return (
		<ReactPaginate
			pageCount={pageCount}
			pageRangeDisplayed={5}
			marginPagesDisplayed={2}
			onPageChange={handlePageChange}
			containerClassName='pagination'
			activeClassName='active'
			breakLabel='👀'
			nextLabel='Next >'
			previousLabel='< Prev'
		/>
	)
}
export default Pagination
