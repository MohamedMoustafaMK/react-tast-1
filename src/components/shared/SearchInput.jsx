import '../../styles/shared.css'
import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import axios from 'axios'
import SearchResults from '../SearchResults'

const SearchInput = ({ placeholder, language }) => {
	const [showSearch, setShowSearch] = useState(true)
	const [searchInputValue, setSearchInputValue] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const debouncedSearchInputValue = useDebounce(searchInputValue)
	const baseUrl = 'https://webapi.cooingestate.com/api/locations'

	useEffect(() => {
		fetchSearchData()
	}, [debouncedSearchInputValue])

	const fetchSearchData = async () => {
		console.log(language)

		try {
			const { data } = await axios.get(baseUrl, {
				params: {
					language: language,
					search_term: debouncedSearchInputValue,
				},
			})
			console.log('🚀 ~ fetchSearchData ~ data:', data)
			setSearchResults(data)
		} catch (error) {
			console.log('🚀 ~ handleSearchChange ~ error:', error)
		}
	}
	const handleShowSearchBox = () => {
		setShowSearch(false)
		setSearchInputValue('')
		fetchSearchData()
	}

	const handleHideSearchBox = () => {
		setShowSearch(true)
		setSearchInputValue('')
	}

	const handleSearchChange = async (e) => {
		setSearchInputValue(e.target.value)
	}

	return (
		<div className='search-input-container'>
			<input
				className='search-input'
				type='text'
				placeholder={showSearch ? placeholder : null}
				onFocus={handleShowSearchBox}
				onBlur={handleHideSearchBox}
				onChange={handleSearchChange}
				value={searchInputValue}
			/>
			{!showSearch && (
				<div className='search-box'>
					<h2>Search Results</h2>
					<SearchResults searchResults={searchResults} />
				</div>
			)}
		</div>
	)
}

SearchInput.defaultProps = {
	language: 'en',
}
export default SearchInput
