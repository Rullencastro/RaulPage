/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
		screens: {
			'sm': '640px',
	  
			'md': '768px',
	  
			'lg': '1024px',
	  
			'xl': '2000px',
	  
			'2xl': '3000px'
		},
		backgroundImage: {
			'testing': "url('/titaniumSand.jpg')",
		  }
	},
	plugins: [],
}
