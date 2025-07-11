/** @type {import('tailwindcss').Config} */
import { resolve } from "path";

import papyrusUI from "papyrus-ui/plugin";

export default {
  content: [
    resolve(__dirname, "./components/**/*.{js,ts,jsx,tsx,mdx}"),
    resolve(__dirname, "../packages/papyrus-ui/src/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  darkMode: ["class"],
  plugins: [papyrusUI],
};
