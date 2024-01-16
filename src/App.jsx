import Main from './Components/Main/Main'
import About from './Components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.min.css'
import Layout from './Components/Layout'

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
				element: <h1>Placeholder</h1>,
			},
		],
		errorElement: <h1>Error</h1>,
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
