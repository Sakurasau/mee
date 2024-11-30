import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthState } from '@mee/entities/auth'

const basePrefix = import.meta.env.VITE_CLIENT_WEB_BASE_PREFIX || ''

export const Route = createFileRoute('/_authed')({
  beforeLoad: async () => {
    if (!useAuthState.getState().isLoggedIn()) {
      throw redirect({
        to: `${basePrefix}/auth`,
      })
    }
  },
})
