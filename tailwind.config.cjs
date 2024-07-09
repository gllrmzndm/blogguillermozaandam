/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        herobackgroundimage: "url('./public/assets/tim.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
