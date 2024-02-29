import HomePage from './pages/HomePage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import GuestNavStack from './navigation/GuestNavStack'

function App() {
	const user = 'guest'
	const getNavStack = () => {
		if (user === 'guest') {
			return <GuestNavStack />
		}
	}
	return (
		<>
			<Navbar />
			{getNavStack()}
			<Footer />
		</>
	)
}

export default App
