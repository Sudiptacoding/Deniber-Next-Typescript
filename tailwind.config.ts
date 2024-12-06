import type { Config } from "tailwindcss";
import daisyui from 'daisyui';
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED1C24',   // Custom primary color
        secondary: '#2B2C30', // Custom secondary color
        common: '#464949'
      },
      translate: {
        '1/3': '33.33%',
        '2/3': '66.66%',
      },

    },
  },
  plugins: [daisyui],
} satisfies Config;
