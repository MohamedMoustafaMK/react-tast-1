import App from '../../App'
import { useTranslation } from 'react-i18next'

const DirectionWrapper = () => {
	const { i18n } = useTranslation()
	document.documentElement.dir = i18n.dir()
	return <App />
}

export default DirectionWrapper
