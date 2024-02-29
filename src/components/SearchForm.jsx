import SubmitButton from './shared/SubmitButton'
import '../styles/SearchForm.css'
import SearchInput from './shared/SearchInput'
import Dropdown from './shared/Dropdown'

const SearchForm = ({ language, t, dropdownItems }) => {
	const handleDropdownSelect = (selectedItems) => {
		console.log('Selected items:', selectedItems)
	}

	return (
		<div className='search-form-container'>
			<form className='search-form'>
				<SearchInput
					language={language}
					placeholder={t('home-seacrh_card-search_form-placeholder')}
				/>
				<div className='dropdown-btns-list'>
					<Dropdown
						title={t('search_form-property_type-dropdown')}
						items={dropdownItems.propertyType}
						onSelect={handleDropdownSelect}
						display='text'
					/>
					<Dropdown
						language={language}
						title={t('search_form-bedrooms-dropdown')}
						items={dropdownItems.bedrooms}
						onSelect={handleDropdownSelect}
						display='nubmer'
					/>
					<Dropdown
						language={language}
						title={t('search_form-price-dropdown')}
						items={dropdownItems.price}
						onSelect={handleDropdownSelect}
						display='range'
					/>
				</div>
				<SubmitButton
					title={t('home-search_card-search_form-button_title')}
				/>
			</form>
		</div>
	)
}

export default SearchForm
