import '../styles/SearchCard.css'
import SearchForm from './SearchForm'

const SearchCard = ({ language, t, dropdownItems }) => {
	return (
		<div className='search-card'>
			<div className='text-search-container'>
				<div className='search-desc'>
					<h1>{t('home-search_card-title')}</h1>
					<p>{t('home-search_card-desc')}</p>
				</div>

				<SearchForm
					buttonTitle={t('home-search_card-search_form-button_title')}
					dropdownItems={dropdownItems}
					t={t}
					language={language}
				/>
			</div>
		</div>
	)
}

export default SearchCard
