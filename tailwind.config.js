/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'background': '#023047',
				'primary': '#FFB703',
			  },
		},
	},
	plugins: [],
}

export default config
