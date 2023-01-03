/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require('prettier-plugin-tailwindcss')],
	content: ['./index.html'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
			},
		},
		screens: {
			sm: '576',
			md: '768px',
			lg: '976px',
			xl: '1200px',
			xxl: '1400px',
		},

		extend: {},
	},
	plugins: [],
};
