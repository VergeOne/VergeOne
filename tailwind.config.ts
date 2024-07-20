import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#222222",
        "brand-prim": "#FF800B",
        "brand-sec": "#FAFF00",
        "brand-whiteish": "#D9D9D9",
      },
      keyframes: {
        "blob-trans": {
          from: {
            opacity: "1",
            transform: "translate(50%,90%)",
          },
          to: {
            opacity: "0.1",
            transform: "translate(-70vw,-50%)",
          },
        },
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeTop: {
          from: {
            transform: "translate(-50% , -5vh)",
            opacity: "0",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, 0)",
          },
        },
        fadeLeft: {
          from: {
            transform: "translate(-10vw, 0)",
            opacity: "0",
          },
          to: {
            opacity: "1",
            transform: "translate(0, 0)",
          },
        },
        fadeRight: {
          from: {
            transform: "translate(10vw ,0)",
            opacity: "0",
          },
          to: {
            opacity: "1",
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        "blob-trans": "blob-trans linear forwards",
        fade: "fade ease forwards 1.5s",
        fadeTop: "fadeTop ease forwards 1.5s",
        fadeLeft: "fadeLeft ease forwards 1.5s",
        fadeRight: "fadeRight ease forwards 1.5s",
      },
    },
  },
  plugins: [],
};
export default config;
