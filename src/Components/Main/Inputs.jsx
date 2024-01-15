import { useReducer } from 'react'
import { toast } from 'react-toastify'

const Inputs = () => {
	const handleTextareaChange = (e) => {
		dispatch({ type: 'SET_TEXT', payload: e.target.value })
	}

	const alternateText = (text) => {
		const newText = []

		for (let i = 0; i < text.length; i++) {
			if (i % 2 === 0) {
				newText.push(text[i].toUpperCase())
			} else {
				newText.push(text[i].toLowerCase())
			}
		}

		return newText.join('')
	}

	const handleText = (state, action) => {
		if (!action.payload) {
			return
		}

		switch (action.type) {
			case 'SET_TEXT':
				return action.payload
			case 'SET_TEXT_UPPERCASE':
				toast('Converted to uppercase')
				return action.payload.toUpperCase()
			case 'SET_TEXT_LOWERCASE':
				toast('Converted to lowercase')
				return action.payload.toLowerCase()
			case 'SET_TEXT_ALTERNATE':
				toast('Converted to alternate case')
				return alternateText(action.payload)
			case 'SET_TEXT_CLEAR':
				toast('Cleared')
				return (action.payload = '')
			case 'COPY_TO_CLIPBOARD':
				toast('Copied to Clipboard')
				navigator.clipboard.writeText(action.payload)
				return action.payload
			case 'SET_TEXT_REMOVE_SPACES':
				toast('Removed Extra Spaces')
				return action.payload.replace(/ +/g, ' ').trim()
			default:
				return state
		}
	}

	const [text, dispatch] = useReducer(handleText, '')

	return (
		<div className='grid mb-8'>
			<p className='pl-2 mb-2 font-mono text-lg font-medium'>Source Text</p>
			<textarea
				className='font-mono text-lg resize-none textarea textarea-bordered h-36'
				placeholder='Enter Text Here....'
				value={text}
				onChange={handleTextareaChange}
			></textarea>
			<div className='flex flex-wrap gap-4 mt-4'>
				<button
					className='btn btn-accent'
					onClick={() =>
						dispatch({ type: 'SET_TEXT_UPPERCASE', payload: text })
					}
				>
					Convert to UPPERCASE
				</button>
				<button
					className='btn btn-accent'
					onClick={() =>
						dispatch({ type: 'SET_TEXT_LOWERCASE', payload: text })
					}
				>
					Convert to lowercase
				</button>
				<button
					className='btn btn-warning'
					onClick={() =>
						dispatch({ type: 'SET_TEXT_ALTERNATE', payload: text })
					}
				>
					Convert to aLtErNaTe CaSe
				</button>
				<button
					className='btn btn-error'
					onClick={() =>
						dispatch({ type: 'SET_TEXT_CLEAR', payload: text })
					}
				>
					Clear Text
				</button>
				<button
					className='btn btn-success'
					onClick={() =>
						dispatch({ type: 'COPY_TO_CLIPBOARD', payload: text })
					}
				>
					Copy to Clipboard
				</button>
				<button
					className='btn btn-info'
					onClick={() =>
						dispatch({ type: 'SET_TEXT_REMOVE_SPACES', payload: text })
					}
				>
					Remove Extra Spaces
				</button>
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
						value={text}
					></textarea>
				</div>
			</div>
		</div>
	)
}

export default Inputs
