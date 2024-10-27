/** @type {import('tailwindcss').Config} */

import { configTailwind } from 'mee-web/tailwind.config'

export default {
  content: ['../**/src/**/*.{ts,tsx}'],
  presets: [configTailwind],
}
