/** @type {import('tailwindcss').Config} */
import { resolve } from 'path';

import papyrusUI from '@papyrus-ui/components/tailwindcss-plugin';

export default {
  content: [
    resolve(__dirname, './components/**/*.{js,ts,jsx,tsx,mdx}'),
    resolve(__dirname, '../packages/components/src/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  darkMode: ['class'],
  plugins: [papyrusUI],
};
