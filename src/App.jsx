import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main/Main'

import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
	return (
		<div className='relative'>
			<Header />
			<div className='px-12 mt-12'>
				<Main />
			</div>
			<Footer />
			<ToastContainer autoClose={1500} hideProgressBar />
		</div>
	)
}

export default App
