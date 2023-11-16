/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        st: ['Staatliches', 'cursive'],
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        Geologica: ['Geologica', 'sans-serif'],
        play: ['Play', 'sans-serif'],
        'myfont': ['MyCustomFont-Regular', 'MyCustomFont-Bold'],

      },
      screens: {
        lg: { max: '1800px' },
        md: { max: '990px' },
        sm: { max: '600px' },
        xs: { max: '400px' },
        minmd: '1700px',
        minlg: '2100px',
      },
    },
  },

  plugins: [],
}
