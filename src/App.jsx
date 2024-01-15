import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main/Main'

const App = () => {
	return (
		<>
			<Header />
			<div className='px-12 mt-12'>
				<Main />
			</div>
			<Footer />
		</>
	)
}

export default App
