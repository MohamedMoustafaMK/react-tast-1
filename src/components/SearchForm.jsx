import SubmitButton from './shared/SubmitButton'
import '../styles/SearchForm.css'
import SearchInput from './shared/SearchInput'
import Dropdown from './shared/Dropdown'
import { extractOptionsTrans } from '../util/formatting'

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
						items={extractOptionsTrans(
							dropdownItems.propertyType,
							language,
						)}
						onSelect={handleDropdownSelect}
						display='text'
					/>
					<Dropdown
						language={language}
						title={t('search_form-bedrooms-dropdown')}
						items={extractOptionsTrans(
							dropdownItems.bedrooms,
							language,
						)}
						onSelect={handleDropdownSelect}
						display='number'
					/>
					<Dropdown
						language={language}
						title={t('search_form-price-dropdown')}
						items={extractOptionsTrans(
							dropdownItems.price,
							language,
						)}
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
