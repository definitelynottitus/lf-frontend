/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern-1': "url('/aboutpagehero1.jpg')",
				'hero-pattern-2': "url('/team_photo.jpg')",
			}
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	}
}
