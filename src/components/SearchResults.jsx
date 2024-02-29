import '../styles/SearchResults.css'

const SearchResults = ({ searchResults }) => {
	return (
		<>
			{searchResults.map((search, index) => (
				<div className='search-result-card' key={index}>
					<img
						className='search-img'
						src={search.image_path}
						alt='🔍'
					/>
					<div>
						<h2 className='search-name'>{search.name}</h2>
						<div className='search-area-name'>
							{search.area_name}
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default SearchResults
