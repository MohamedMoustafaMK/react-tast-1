import { useEffect, useRef } from 'react'

const useEffectAfterMount = (effect, dependencies) => {
	const isFirstRender = useRef(true)

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}

		return effect()
	}, dependencies)
}

export default useEffectAfterMount
