import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
	return (
		<div className='relative'>
			<Header />
			<div className='px-12 mt-12'>
				<Outlet />
			</div>
			<Footer />
			<ToastContainer autoClose={1000} hideProgressBar theme='colored' />
		</div>
	)
}

export default Layout
