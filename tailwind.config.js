import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist', 'sans-serif'],
				mono: ['Geist-Mono', 'monospace'],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['autumn', 'coffee'],
	},
}
