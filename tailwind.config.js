/** @type {import('tailwindcss').Config} */
import vueformPlugin from '@vueform/vueform/tailwind';
export default {
content: [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
  './vueform.config.js',
  './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
  './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
],
  theme: {
    extend: {},
  },
  plugins: [
    vueformPlugin,
  ]
}