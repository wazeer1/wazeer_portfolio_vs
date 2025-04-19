/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#181818",
        foreground: "#1f1f1f",
        active: "#37373d",
        typo_primary: "#ffffff",
        border_col: "#868686",
        comment: "#6a9955",
        string: "#ce9178",
        keyword: "#569cd6",
        number: "#b5cea8",
        function: "#dcdcaa",
      },
    },
  },
  plugins: [],
};
