const About = () => {
	return (
		<div className='flex flex-col justify-center h-screen gap-36'>
			<h1 className='mb-8 text-3xl font-semibold text-center text-primary'>
				About
			</h1>
			<div className='grid gap-4 mb-8'>
				<div className='collapse collapse-arrow bg-base-200'>
					<input
						type='checkbox'
						name='my-accordion-2'
						defaultChecked={false}
					/>
					<div className='text-xl font-medium collapse-title'>
						Analyze your text
					</div>
					<div className='collapse-content'>
						<p>
							Characters Wizard gives you a way to analyze your text
							quickly and efficiently. It lets you count the words, count
							the characters or average reading time required. It has
							both light and dark mode to suit your needs.
						</p>
					</div>
				</div>
				<div className='collapse collapse-arrow bg-base-200'>
					<input
						type='checkbox'
						name='my-accordion-2'
						defaultChecked={false}
					/>
					<div className='text-xl font-medium collapse-title'>
						Free and Open Source
					</div>
					<div className='collapse-content'>
						<p>
							Free forever, we will never charge a penny for providing
							this service.
						</p>
					</div>
				</div>
				<div className='collapse collapse-arrow bg-base-200'>
					<input
						type='checkbox'
						name='my-accordion-2'
						defaultChecked={false}
					/>
					<div className='text-xl font-medium collapse-title'>
						Compatibility
					</div>
					<div className='collapse-content'>
						<p>Fully responsive and works on every browser.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
