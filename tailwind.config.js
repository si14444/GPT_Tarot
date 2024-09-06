/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        "y-180": "rotateY(180deg)",
        "y-0": "rotateY(0deg)",
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".transform-style-preserve-3d": {
          transformStyle: "preserve-3d",
        },
      });
    },
  ],
};
