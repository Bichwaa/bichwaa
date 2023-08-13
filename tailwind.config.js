/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    }
  }
,
  plugins: [],
}

