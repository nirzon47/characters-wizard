import { FaGithub } from 'react-icons/fa6'

const Contact = () => {
	return (
		<div className='flex flex-col justify-center h-[80vh] gap-24'>
			<h1 className='mb-6 text-3xl font-semibold text-center text-primary'>
				Contact
			</h1>
			<div className='text-center '>
				<a
					href='mailto:nirzonk47@gmail.com'
					className='text-xl font-semibold text-blue-500 duration-200 hover:text-blue-700'
				>
					nirzonk47@gmail.com
				</a>
				<div className='flex items-center justify-center gap-4 mt-4'>
					<a href='https://github.com/nirzon47'>
						<FaGithub className='text-4xl text-blue-500 duration-200 hover:text-blue-700' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contact
