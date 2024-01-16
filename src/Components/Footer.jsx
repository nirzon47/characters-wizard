import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='items-center p-4 footer bg-neutral text-neutral-content'>
			<aside className='items-center grid-flow-col gap-6'>
				<Link to={'/'}>
					<img src='/favicon.ico' alt='Branding' className='h-14' />
				</Link>
				<p className='text-lg font-medium'>
					Made with ❤️ by Nirzon Karmakar
				</p>
			</aside>
			<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
				<a
					href='https://github.com/nirzon47/characters-wizard'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub className='text-4xl duration-200 hover:text-amber-950' />
				</a>
				<a
					href='https://linkedin.com/in/nirzon'
					target='_blank'
					rel='noreferrer'
				>
					<FaLinkedin className='text-4xl duration-200 hover:text-amber-950' />
				</a>
			</nav>
		</footer>
	)
}

export default Footer
