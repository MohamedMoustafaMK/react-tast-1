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
	const handleSelectingItem = (key) => {
		setSelectedItems(
			selectedItems.includes(key)
				? selectedItems.filter((item) => item !== key)
				: [...selectedItems, key],
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
			{Object.entries(items).map(([key, value]) => (
				<div className='checkbox-options' key={key}>
					<input
						type='checkbox'
						id={key}
						onChange={() => handleSelectingItem(key)}
						checked={selectedItems.includes(key)}
					/>
					<label htmlFor={key}>{key}</label>
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
	items: {
		Option1: 'Label 1',
		Option2: 'Label 2',
		Option3: 'Label 3',
	},
	language: 'en',
	dispay: 'text',
}

Dropdown.propTypes = {
	title: PropTypes.string,
	items: PropTypes.object,
	display: PropTypes.string,
}

export default Dropdown
