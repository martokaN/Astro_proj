/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        button: '#DFB67D',
        hover: '#CA9862',
        heading: '#DAAB6F',
        text: '#432602',
        specialbg: '#FFFFFF',
        background: '#F6E2CA',
        buttontext: '#FFFFFF',
        border: '#4B3001',
      },
    },
  },
  plugins: [],
}