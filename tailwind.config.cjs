/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require('prettier-plugin-tailwindcss')],
	content: ['./index.html'],
	theme: {
		container: {
			center: true,
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},

		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
		},

		extend: {},
	},
	plugins: [],
};
