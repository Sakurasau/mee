import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { isDev } from '@mee/shared/lib/env'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      {isDev() && <TanStackRouterDevtools />}
    </>
  )
}
