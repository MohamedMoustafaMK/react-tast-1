import React from 'react'
import '../../styles/shared.css'

const SubmitButton = ({ title }) => {
	return (
		<div>
			<button className='submit-btn' type='button'>
				{title}
			</button>
		</div>
	)
}

export default SubmitButton
