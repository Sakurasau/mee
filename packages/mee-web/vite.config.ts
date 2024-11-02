import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: resolve(__dirname, '../../.env') })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mee': path.resolve(__dirname, '../mee-web/src'),
      '@multi': path.resolve(__dirname, '../mee-multiplatform/src'),
    },
  },

  base: process.env.VITE_CLIENT_WEB_BASE_PATH || '/',
})
