import { Img } from 'react-image'
import '../styles/SearchResults.css'
import Spinner from './shared/Spinner'

const SearchResults = ({ searchResults }) => {
	return (
		<>
			{searchResults.map((search, index) => (
				<div className='search-result-card' key={index}>
					<Img
						className='search-img'
						src={search.image_path}
						alt='🔍'
						loader={<Spinner />}
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
