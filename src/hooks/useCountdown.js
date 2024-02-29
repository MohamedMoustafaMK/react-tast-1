import { useState, useEffect, useRef } from 'react'

const useCountdown = (initialState, interval, onTimeout) => {
	const [state, setState] = useState(initialState)
	const [isActive, setIsActive] = useState(false)
	const countdownRef = useRef(null)

	const startCountdown = (message) => {
		setState(message)
		setIsActive(true)
		countdownRef.current = setTimeout(() => {
			setIsActive(false)
			setState(initialState)
			if (onTimeout) {
				onTimeout()
			}
		}, interval)
	}

	const resetCountdown = () => {
		clearTimeout(countdownRef.current)
		setIsActive(false)
		setState(initialState)
	}

	useEffect(() => {
		return () => clearTimeout(countdownRef.current)
	}, [])

	return { state, isActive, startCountdown, resetCountdown }
}

export default useCountdown
