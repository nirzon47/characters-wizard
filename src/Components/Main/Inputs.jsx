import { useReducer } from 'react'
import { toast } from 'react-toastify'

const Inputs = () => {
	const handleTextareaChange = (e) => {
		textDispatch({ type: 'SET_TEXT', payload: e.target.value })
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

	const getStats = (text) => {
		const words = text.trim().split(/\s+/)
		const wordCount = words.length
		const characterCount = text.length
		const readingTime = characterCount / 200
		return { wordCount, characterCount, readingTime }
	}

	const handleText = (state, action) => {
		if (!action.payload) {
			toast.error('No source text')
			return {
				text: '',
				stats: {
					wordCount: 0,
					characterCount: 0,
					readingTime: 0,
				},
			}
		}

		switch (action.type) {
			case 'SET_TEXT':
				return {
					text: action.payload,
					stats: getStats(action.payload),
				}
			case 'SET_TEXT_UPPERCASE':
				toast.success('Converted to uppercase')
				return {
					text: action.payload.text.toUpperCase(),
					stats: getStats(action.payload.text),
				}
			case 'SET_TEXT_LOWERCASE':
				toast.success('Converted to lowercase')
				return {
					text: action.payload.text.toLowerCase(),
					stats: getStats(action.payload.text),
				}
			case 'SET_TEXT_ALTERNATE':
				toast.success('Converted to alternate case')
				return {
					text: alternateText(action.payload.text),
					stats: getStats(action.payload.text),
				}
			case 'SET_TEXT_CLEAR':
				toast.success('Cleared')
				return {
					text: '',
					stats: {
						wordCount: 0,
						characterCount: 0,
						readingTime: 0,
					},
				}
			case 'COPY_TO_CLIPBOARD':
				toast.success('Copied to Clipboard')
				navigator.clipboard.writeText(action.payload.text)
				return action.payload
			case 'SET_TEXT_REMOVE_SPACES':
				toast.success('Removed Extra Spaces')
				return {
					text: action.payload.text.replace(/ +/g, ' '),
					stats: getStats(action.payload.text.replace(/ +/g, ' ')),
				}
			default:
				return state
		}
	}

	const [text, textDispatch] = useReducer(handleText, {
		text: '',
		stats: {
			wordCount: 0,
			characterCount: 0,
			readingTime: 0,
		},
	})

	return (
		<div className='grid mb-8'>
			<p className='pl-2 mb-2 font-mono text-lg font-medium'>Source Text</p>
			<textarea
				className='font-mono text-lg resize-none textarea textarea-bordered h-36'
				placeholder='Enter Text Here....'
				value={text.text}
				onChange={handleTextareaChange}
			></textarea>
			<div className='flex flex-wrap gap-4 mt-4'>
				<button
					className='btn btn-accent'
					onClick={() =>
						textDispatch({ type: 'SET_TEXT_UPPERCASE', payload: text })
					}
				>
					Convert to UPPERCASE
				</button>
				<button
					className='btn btn-accent'
					onClick={() =>
						textDispatch({ type: 'SET_TEXT_LOWERCASE', payload: text })
					}
				>
					Convert to lowercase
				</button>
				<button
					className='btn btn-warning'
					onClick={() =>
						textDispatch({ type: 'SET_TEXT_ALTERNATE', payload: text })
					}
				>
					Convert to aLtErNaTe CaSe
				</button>
				<button
					className='btn btn-error'
					onClick={() =>
						textDispatch({ type: 'SET_TEXT_CLEAR', payload: text })
					}
				>
					Clear Text
				</button>
				<button
					className='btn btn-success'
					onClick={() =>
						textDispatch({ type: 'COPY_TO_CLIPBOARD', payload: text })
					}
				>
					Copy to Clipboard
				</button>
				<button
					className='btn btn-info'
					onClick={() =>
						textDispatch({
							type: 'SET_TEXT_REMOVE_SPACES',
							payload: text,
						})
					}
				>
					Remove Extra Spaces
				</button>
			</div>
			<div className='divider'></div>
			<div className='mt-4'>
				<h4 className='text-2xl font-bold'>Summary</h4>

				<div className='my-4 text-lg'>
					<p>
						Number of words:{' '}
						<span className='font-bold text-primary'>
							{text.stats.wordCount}
						</span>
					</p>
					<p>
						Number of characters:{' '}
						<span className='font-bold text-primary'>
							{text.stats.characterCount}
						</span>
					</p>
					<p>
						Estimated Reading Time:{' '}
						<span className='font-bold text-primary'>
							{text.stats.readingTime}
						</span>
					</p>
				</div>
				<div className='grid my-8'>
					<p className='pl-2 mb-2 font-mono text-lg font-medium'>
						Output Text
					</p>
					<textarea
						className='font-mono text-lg resize-none textarea textarea-bordered h-36'
						placeholder='Output Text'
						disabled
						value={text.text}
					></textarea>
				</div>
			</div>
		</div>
	)
}

export default Inputs
