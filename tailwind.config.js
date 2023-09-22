/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3563E9',
        'secondary': '#54A6FF',
        'dark': '#131313',
        'dark-gray': '#90A3BF',
        'light-gray': '#F6F7F9',
      },
      backgroundImage: { 
        'pattern-primary': "url('/vectors/pattern-primary.svg')" ,
        'pattern-secondary': "url('/vectors/pattern-secondary.svg')" 
      }
    },
  },
  plugins: [],
}

