import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      laptop: { max: "1280px" },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: "600px" },
      // => @media (max-width: 767px) { ... }

      phone: { max: "415px" },
      // => @media (max-width: 639px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        "mono-sans": ["var(--font-mono-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        sect3:
          "url('https://b.galxestatic.com/w/s/5f88ccb/img/recommendbg.1db2505.png')",
      },
      backgroundColor: {
        "my-color": "#060708",
      },
      backgroundPosition: {
        fifty: "50%",
      },
      backgroundSize: {
        hundred: "100% 100%",
      },
      colors: {
        "footer-color": "#ced3db",
        "footer-button-color": "#0057ff",
        "footer-light": "#9097a6",
        "footer2-bgx": "#15171c",
      },
    },
  },
  plugins: [],
};
export default config;
