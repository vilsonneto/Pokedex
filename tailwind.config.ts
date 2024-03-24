import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bug": "#729f3f",
        "dragon": "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
        "fairy": "#fdb9e9",
        "normal": "#a4acaf",
        "fighting": "#d56723",
        "flying": "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        "poison": "#b97fc9",
        "ground": "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        "rock": "#a38c21",
        "ghost": "#7b62a3",
        "steel": "#9eb7b8",
        "fire": "#fd7d24",
        "water": "#4592c4",
        "grass": "#9bcc50",
        "electric": "#eed535",
        "psychic": "#f366b9",
        "ice": "#51c4e7",
        "dark": "#707070"
      },
      colors: {
        'red': '#E20000',
        'yellow': '#FAAD17',
        'gray': '#616161',
        'dark-gray': '#444444',
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
