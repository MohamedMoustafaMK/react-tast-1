// Spinner.jsx
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
	return (
		<div className='spinner-container'>
			<TailSpin color='#333' height={50} width={50} />
		</div>
	)
}

export default Spinner
