import { IOAuthUser, useAuthStore } from '@mee/entities/auth'
import { useEnvironmentStore } from '@mee/entities/environment'
import { createFileRoute } from '@tanstack/react-router'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { z } from 'zod'

const authSuccessSearchSchema = z.object({
  jwtUser: z.string().optional(),
})

export const Route = createFileRoute('/auth/success')({
  component: RouteComponent,
  validateSearch: authSuccessSearchSchema,
})

// export const success = (jwt: string) => {
//   const user: IOAuthUser = jwtDecode(jwt)
//   user && useAuthStore.getState().setUser(user)
//   window.location.href = '/'
// }

function RouteComponent() {
  const isTauri = useEnvironmentStore((state) => state.isTauri)
  const { jwtToken: tauriJwtToken } = useEnvironmentStore(
    (state) => state.oauth,
  )
  const { setUser } = useAuthStore()
  const { jwtUser } = Route.useSearch()
  const navigate = Route.useNavigate()

  if (!jwtUser) {
    navigate({ to: '/' })
  }

  useEffect(() => {
    if (isTauri && tauriJwtToken) {
      const userFromJwt: IOAuthUser = jwtDecode(tauriJwtToken)
      userFromJwt && setUser(userFromJwt)
      return
    }

    if (jwtUser) {
      const userFromJwt: IOAuthUser = jwtDecode(jwtUser)
      userFromJwt && setUser(userFromJwt)
    }

    navigate({ to: '/' })
  }, [jwtUser, tauriJwtToken])

  return 'Success!'
}
