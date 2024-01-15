const Header = () => {
	return (
		<header className='flex items-center justify-between p-4'>
			<div className='flex items-center gap-16'>
				{/* TODO: Add Link from react router */}
				<h2 className='font-mono text-xl font-bold md:text-2xl'>
					Characters Wizard
				</h2>
				<nav>
					<ul className='flex gap-6 font-semibold text-blue-500'>
						<li className='duration-200 hover:text-blue-700'>About</li>
						<li className='duration-200 hover:text-blue-700'>Contact</li>
					</ul>
				</nav>
			</div>
			{/* TODO: Add Theme Toggle */}
			<p>Placeholder</p>
		</header>
	)
}

export default Header
