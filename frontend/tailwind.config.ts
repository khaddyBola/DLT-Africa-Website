import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
   
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // screens:{
      //   '2xl': {'min': '1440px'},
      //   'xl': {'min': '1200px'},
      //   'lg': {'min': '1023px'},
      //   'md': {'min': '767px'},
      //   'sm': {'min': '639px'},
      //   // 'xsm': {'max': '400px'},

      // }
    },
  },
  plugins: [],
};
export default config;
