import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mono-sans": ["var(--font-mono-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sect3": "url('https://b.galxestatic.com/w/s/5f88ccb/img/recommendbg.1db2505.png')"
      },
      backgroundColor: {
        'my-color': '#060708'
        
      },
      backgroundPosition: {
        fifty: '50%',
      },
      backgroundSize: {
        'hundred': '100% 100%',
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
};
export default config;
