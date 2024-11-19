import { createFileRoute } from '@tanstack/react-router'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { IOAuthUser, useAuthState } from '@mee/entities/auth'
import { z } from 'zod'

const authSuccessSearchSchema = z.object({
  jwtUser: z.string().optional(),
})

export const Route = createFileRoute('/auth/success')({
  component: RouteComponent,
  validateSearch: authSuccessSearchSchema,
})

function RouteComponent() {
  const { setUser } = useAuthState()
  const { jwtUser } = Route.useSearch()
  const navigate = Route.useNavigate()

  if (!jwtUser) {
    navigate({ to: '/' })
  }

  useEffect(() => {
    if (jwtUser) {
      const userFromJwt: IOAuthUser = jwtDecode(jwtUser)
      userFromJwt && setUser(userFromJwt)
    }

    navigate({ to: '/' })
  }, [jwtUser])

  return 'Success!'
}
