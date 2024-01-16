import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen gap-4 text-white bg-red-950'>
			<h1 className='text-3xl font-bold text-center'>
				Error 404! <br /> Route does not exist
			</h1>
			<Link
				to='/'
				className='text-xl font-semibold text-blue-300 duration-200 hover:text-blue-500'
			>
				Go back to home
			</Link>
		</div>
	)
}

export default Error
