/** @type {import('tailwindcss').Config} */

import { configTailwind } from '@config/tailwind/tailwind.config'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  presets: [configTailwind],
}
