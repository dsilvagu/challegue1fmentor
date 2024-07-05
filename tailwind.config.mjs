/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily :{
				'inter': ["'Inter Variable'", 'sans-serif'],
			}
		},
		colors: {
			'cgreen': 'hsl(75, 94%, 57%)',
			'cwhite': 'hsl(0, 0%, 100%)',
			'cgrey': 'hsl(0, 0%, 20%)',
			'cdark': 'hsl(0, 0%, 40%)',
			'cblack': 'hsl(0, 0%, 8%)',
		}
	},
	plugins: [],
}
