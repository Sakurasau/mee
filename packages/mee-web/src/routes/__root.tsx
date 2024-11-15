import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { isDev } from '@mee/shared/lib/env'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:text-purple-500">
          Home
        </Link>
        <Link to="/auth" className="[&.active]:text-purple-500">
          Auth
        </Link>
      </div>
      <hr />
      <Outlet />
      {isDev() && <TanStackRouterDevtools />}
    </>
  )
}
