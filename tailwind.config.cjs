/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					cyan: "#5FB4A2",
					grayishDarkBlue: "#33323D",
				},
				secondary: {
					brightRed: "#F43030",
					lightGrey: "#EAEAEB"
				},
				neutral: {
					white: "#FFFFFF",
				},
			},

			backgroundColor: {
				primary: {
					cyan: "#5FB4A2",
					darkBlue: "#203A4C",
					grayishDarkBlue: "#33323D",
				},
				secondary: {
					brightRed: "#F43030",
					veryLightGrey: "#FAFAFA",
					lightGrey: "#EAEAEB",
				},

				neutral: {
					white: "#FFFFFF",
				},
			},

			fontFamily: {
				"ibarra" : ["Ibarra Real Nova", "serif"],
				"public": ["Public Sans", "sans-serif"],
			},
			screens: {
				mobile: '23.4375em',
				tablet: '48em',
				desktop: '70em',
			},
			gridTemplateColumns: {
				aboutTablet: '17.5625rem 1fr',
				aboutDesktop: '33.75rem 1fr',
				contactDesktop: '4fr 6fr'
			}
		},
	},
	plugins: [],
}
