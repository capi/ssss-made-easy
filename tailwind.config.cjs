/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// blue
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
				// additional styles see https://github.com/themesberg/flowbite-svelte/blob/main/tailwind.config.cjs
				// flowbite-svelte (new default)
				// primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' },
			}
		}
	}
}
