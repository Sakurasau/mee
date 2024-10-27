import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mee': path.resolve(__dirname, '../mee-web/src'),
      '@multi': path.resolve(__dirname, '../mee-multiplatform/src'),
    },
  },
})
