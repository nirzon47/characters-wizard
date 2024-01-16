import { useReducer } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Header = () => {
	const handleThemeChange = (state) => {
		if (state === 'autumn') {
			document.documentElement.setAttribute('data-theme', 'coffee')
			return 'coffee'
		} else if (state === 'coffee') {
			document.documentElement.setAttribute('data-theme', 'autumn')
			return 'autumn'
		} else {
			return state
		}
	}

	const [theme, dispatchTheme] = useReducer(handleThemeChange, 'autumn')

	return (
		<header className='sticky top-0 z-50 flex items-center justify-between p-4 bg-primary-content'>
			<div className='flex items-center gap-16'>
				<Link to={'/'}>
					<h2 className='font-mono text-xl font-bold duration-200 md:text-2xl hover:text-blue-700'>
						Characters Wizard
					</h2>
				</Link>
				<nav>
					<ul className='flex gap-6 text-base font-semibold'>
						<Link to={'/about'}>
							<li className='duration-200 hover:text-blue-700'>About</li>
						</Link>
						<Link to={'/contact'}>
							<li className='duration-200 hover:text-blue-700'>
								Contact
							</li>
						</Link>
					</ul>
				</nav>
			</div>

			<label className='swap swap-rotate'>
				<input type='checkbox' onClick={() => dispatchTheme()} />
				<FaMoon className='w-10 h-10 swap-off text-blue-950' />
				<FaSun className='w-10 h-10 text-yellow-500 swap-on' />
			</label>
		</header>
	)
}

export default Header
