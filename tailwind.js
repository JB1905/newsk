module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "dark-mode": { raw: "(prefers-color-scheme: dark)" },
    },
    fontFamily: {
      title: ["Headland One", "serif"],
      body: ["Fira Sans", "sans-serif"],
    },
    backdropFilter: {
      blur: "blur(20px)",
    },
  },
  plugins: [require("tailwindcss-filters")],
};
