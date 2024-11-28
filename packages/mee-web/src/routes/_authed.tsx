import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthState } from '@mee/entities/auth'

export const Route = createFileRoute('/_authed')({
  beforeLoad: async () => {
    if (!useAuthState.getState().isLoggedIn()) {
      throw redirect({
        to: '/auth',
      })
    }
  },
})
