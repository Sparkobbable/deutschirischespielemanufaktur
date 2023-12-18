/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			primary: "#FFFFFF",
			background: "#EEEEEE",
			bgdark: "#8F97C6",
			grey: "#737175",
			headline: "#5F76C2",
			error: "#FF5861",
			href: "#0563C1",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
			"pulp-display": ["Pulp Display", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			height: {
				"screen-50": "50vh",
				0.45: "45%",
				42: "10.5rem",
				"1/10": "10%",
			},
			width: {
				0.2: "20%",
				0.3: "30%",
				0.4: "40%",
				0.45: "45%",
				0.8: "80%",
			},
			minHeight: {
				"screen-15": "15vh",
				"screen-20": "20vh",
				"screen-50": "50vh",
				"screen-80": "80vh",
				32: "8rem",
			},
			minWidth: {
				screen: "100vw",
				32: "8rem",
			},
		},
	},
	plugins: [require("daisyui")],
};
