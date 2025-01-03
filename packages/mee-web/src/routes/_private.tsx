import { useAuthStore } from '@mee/entities/auth'
import { createFileRoute, redirect } from '@tanstack/react-router'

const basePrefix = import.meta.env.VITE_CLIENT_WEB_BASE_PREFIX || ''

export const Route = createFileRoute('/_private')({
  beforeLoad: async () => {

    if (!useAuthStore.getState().isLoggedIn()) {
      throw redirect({
        to: `${basePrefix}/auth`,
      })
    }
  }
})
