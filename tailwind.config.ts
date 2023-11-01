import type { Config } from 'tailwindcss'

const config: Config = {
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
      backgroundColor: {
        'my-color': '#060708'
        
      },
      colors: {
        'footer-color': '#ced3db',
        'footer-button-color': '#0057ff',
        'footer-light': '#9097a6',
        'footer2-bgx': '#15171c'
      }
    },
  },
  plugins: [],
}
export default config
