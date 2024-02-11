import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1C355E',
        'primary-green': '#7FBC00',
        'secondary-blue': '#343434',
        'secondary-gray': '#E9E9E9',
        'disable': '#A5A5A5'
      },
    },
  },

  plugins: [],
} satisfies Config

export default config
