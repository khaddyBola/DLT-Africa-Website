import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
  theme: {
<<<<<<< HEAD
    extend: {
      screens:{
        '2sm': '300px'
      },
    
    },
=======

    extend: {},
>>>>>>> 8e9706ea3f62b98428aa77a87c1fb8b2bb261223
  },
  plugins: [],
})


