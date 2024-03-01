import React, { useState, useRef, useEffect } from 'react'
import '../../styles/shared.css'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import PropTypes from 'prop-types'

const Dropdown = ({ items, title, display, language }) => {
	const dropdownRef = useRef(null)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedItems, setSelectedItems] = useState([])

	const handleButtonClick = () => {
		setIsOpen(!isOpen)
	}

	const handleSelectingItem = (item) => {
		setSelectedItems(
			selectedItems.includes(item)
				? selectedItems.filter((selectedItem) => selectedItem !== item)
				: [...selectedItems, item],
		)
	}

	const handleDocumentClick = (e) => {
		if (isOpen && !dropdownRef.current.contains(e.target)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick)
		return () => {
			document.removeEventListener('click', handleDocumentClick)
		}
	}, [isOpen])

	const renderTextItems = () => (
		<>
			{selectedItems.map((item, index) => (
				<React.Fragment key={index}>
					<span className='selected-item'>{item}</span>
					{selectedItems.length > 1 && <span>, </span>}
				</React.Fragment>
			))}
		</>
	)

	const renderDropdownList = () => (
		<div className='dropdown-list'>
			{items.map((item, index) => (
				<div className='checkbox-options' key={index}>
					<input
						type='checkbox'
						id={index}
						onChange={() => handleSelectingItem(item)}
						checked={selectedItems.includes(item)}
					/>
					<label htmlFor={index}>{item}</label>
				</div>
			))}
		</div>
	)

	return (
		<div className='dropdown-container' ref={dropdownRef}>
			<button
				className='dropdown-button'
				onClick={handleButtonClick}
				type='button'
			>
				<div className='selected-items-container'>
					{selectedItems.length === 0 ? (
						<span>{title}</span>
					) : display === 'text' ? (
						renderTextItems()
					) : display === 'number' ? (
						renderTextItems()
					) : display === 'range' ? (
						renderTextItems()
					) : (
						renderTextItems()
					)}
				</div>
				{isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
			</button>
			{isOpen && renderDropdownList()}
		</div>
	)
}

Dropdown.defaultProps = {
	title: 'Select Options',
	items: ['Label 1', 'Label 2', 'Label 3'],
	language: 'en',
	display: 'text',
}

Dropdown.propTypes = {
	title: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.string),
	display: PropTypes.string,
}

export default Dropdown
