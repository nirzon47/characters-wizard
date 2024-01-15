const Inputs = () => {
	return (
		<div className='grid mb-8'>
			<p className='pl-2 mb-2 font-mono text-lg font-medium'>Source Text</p>
			<textarea
				className='font-mono text-lg resize-none textarea textarea-bordered h-36'
				placeholder='Enter Text Here....'
			></textarea>
			<div className='flex flex-wrap gap-4 mt-4'>
				<button className='btn btn-accent'>Convert to UPPERCASE</button>
				<button className='btn btn-accent'>Convert to lowercase</button>
				<button className='btn btn-warning'>
					Convert to aLtErNaTe CaSe
				</button>
				<button className='btn btn-error'>Clear Text</button>
				<button className='btn btn-success'>Copy to Clipboard</button>
				<button className='btn btn-info'>Remove Extra Spaces</button>
			</div>
			<div className='divider'></div>
			<div className='mt-4'>
				<h4 className='text-2xl font-bold'>Summary</h4>
				{/* TODO: Add Realtime updates */}
				<div className='my-4 text-lg'>
					<p>
						Number of words:{' '}
						<span className='font-bold text-primary'>
							{'Placeholder'}
						</span>
					</p>
					<p>
						Number of characters:{' '}
						<span className='font-bold text-primary'>
							{'Placeholder'}
						</span>
					</p>
					<p>
						Estimated Reading Time:{' '}
						<span className='font-bold text-primary'>
							{'Placeholder'}
						</span>
					</p>
				</div>
				<div className='grid my-8'>
					<p className='pl-2 mb-2 font-mono text-lg font-medium'>
						Source Text
					</p>
					<textarea
						className='font-mono text-lg resize-none textarea textarea-bordered h-36'
						placeholder='Output Text'
						disabled
					></textarea>
				</div>
			</div>
		</div>
	)
}

export default Inputs
