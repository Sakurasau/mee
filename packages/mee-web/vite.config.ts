import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { env } from '../config-env/src/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), TanStackRouterVite()],

  base: env.VITE_CLIENT_WEB_BASE_PREFIX || '',
  server: {
    port: Number(env.VITE_CLIENT_WEB_PORT || 3000),
  },
  define: {
    'process.env': env,
  },
})
