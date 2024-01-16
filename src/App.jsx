import Main from './Components/Main/Main'
import About from './Components/About'
import Layout from './Components/Layout'
import Contact from './Components/Contact'
import Error from './Components/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.min.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
		errorElement: <Error />,
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
