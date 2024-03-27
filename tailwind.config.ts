import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-red': '#E20000',
        'poke': '#f2f2f2'

      },
      colors: {
        'red': '#E20000',
        'yellow': '#FAAD17',
        'gray-050': '#A4A4A4',
        'gray-100': '#919191',
        'gray-200': '#616161',
        'gray-300': '#444444',
        'gray-400': '#313131',
        'gray-500': '#212121',
        'blue-150': "#30a7d7"
      },
      fontFamily: {
        'primary': ['"Roboto"', 'sans-serif'],
        'secondary': ['"Roboto Mono"', 'sans-serif']
      
      },
      fontSize: {
        'sm': '0.8rem',
        'base': '1rem',
        'lg': '1.2rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      lineHeight: {
        'loose': '1.5',
      },
      letterSpacing: {
        'wide': '0.15rem',
      },
      width: {
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      height: {
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      padding: {
        'small': '0.5rem',
        'medium': '1rem',
        'large': '2rem',
        'xlarge': '3rem',
      },
      margin: {
        'small': '0.5rem',
        'medium': '1rem',
        'large': '2rem',
        'xlarge': '3rem',
      },
      borderWidth: {
        'default': '1px',
        'thick': '2px',
      },
      borderRadius: {
        'default': '0.25rem',
        'pill': '50rem',
      },
      shadows: {
        'default': '0 1px 2px rgba(0, 0, 0, 0.15)',
        'elevated': '0 3px 6px rgba(0, 0, 0, 0.15)',
        'high': '0 10px 20px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],

};
export default config;
