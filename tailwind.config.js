/** @type {import('https://esm.sh/tailwindcss@3.5.1').Config} */

module.exports = {
  content: [
    "islands/**.{js,jsx,tsx}",
    "routes/**.{js,jsx,tsx}",
    "components/**.{js,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  // daisy UI config
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
