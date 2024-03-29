module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	  animation: {
	    'spin-slow': 'spin 3s linear infinite',
	  }
	},
  },
  variants: {
      extend: {
	  },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
